
namespace QStock.PPLog.Endpoints
{
    using OfficeOpenXml;
    using OfficeOpenXml.Style;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Data;
    using System.Web.Mvc;
    using System.Text;
    using System.Globalization;
    using System.Configuration;
    using System.Net.Configuration;
    using System.Reflection;
    using System.Linq;
    using QStockExcel.Repositories;
    using QStockExcel.Entities;
    using MyRow = Entities.DataEntryRow;

    [RoutePrefix("Services/PPLog/Summary"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SummaryController : ServiceEndpoint
    {
        [HttpPost]

        //public FileContentResult SummaryExcel(IUnitOfWork uow, ExcelExportRequest request)
        //{
        //var curMonth = DateTime.ParseExact(request.YearMonth, "yyyy-MM", CultureInfo.InvariantCulture);
        //int month = curMonth.Month; // 当前月份值
        //                            //string truePath = Directory.GetCurrentDirectory();
        //string truePath = "~\\App_Data\\";
        //string templateFilePath = Path.Combine(truePath, "fill", $"PP summary format-{month}.xlsx");
        //string absolutePath = Server.MapPath(templateFilePath);
        //    using (var package = new ExcelPackage())
        //    {
        //        var sheet1 = package.Workbook.Worksheets.Add("Sheet1");
        //        sheet1.Cells[1, 1].Value = "陈佳雯";
        //        var stream = new MemoryStream();
        //        package.SaveAs(stream);

        //        // 将流的位置重置为起始位置
        //        stream.Position = 0;
        //    }
        //可以先后端解析一下查看是否正确
        //    Dictionary<string, object> map = Summary1(request.YearMonth, request.Vendor, request.PDCL, request.Type, uow.Connection);
        //    //var bytes = ReplaceExcelTemplate(absolutePath, map);
        //    return ExcelContentResult.Create(stream, "PP " + request.YearMonth + " " + (request.Vendor == "" ? "" : request.Vendor + " ")
        //        + (request.PDCL == "" ? "" : request.PDCL + " ") + (request.Type == "" ? "" : request.Type + " ") + "summary" + ".xlsx");
        //}

        public FilePathResult ListExcel(IDbConnection connection, ExcelExportRequest request)
        {
            var curMonth = DateTime.ParseExact(request.YearMonth, "yyyy-MM", CultureInfo.InvariantCulture);
            int month = curMonth.Month;
            int year = curMonth.Year;
            int options = request.Type.Count;
            string templateFilePath = Server.MapPath("~/Modules/PPLog/Summary/fill") + $"\\PP summary format-{month}.xlsx";
            string dir = UploadHelper.DbFilePath("DownloadData");

            if (!Directory.Exists(dir))
                Directory.CreateDirectory(dir);

            string timeStamp = DateTime.Now.ToString("yyyyMMddHHmmssfff");
            string fileName = "PP " + request.YearMonth + " " + "summary" + "_" + timeStamp + ".xlsx";
            string newFilePath = Path.Combine(dir, fileName);
            System.IO.File.Copy(templateFilePath, newFilePath, true);

            var sheetNames = new List<string>
                    {
                        "Summary1 " + (year-1) + " and " + year,
                        "Summary1 " + year + " and " + (year+1),
                        "Summary2 " + (year-1) + " and " + year,
                        "Summary2 " + year + " and " + (year+1)
                    };
            int sheetIndex = 0;
            int spacing = 1;

            //获取数据
            Dictionary<string, Dictionary<string, object>> maps = new Dictionary<string, Dictionary<string, object>>();
            for (int i = 0; i < options; i++)
            {
                Dictionary<string, object> map = Summary1(request.YearMonth, request.Vendor[i], request.PDCL[i], request.Type[i], connection);
                maps[$"map{i}"] = map;
            }

            using (ExcelPackage templatePackage = new ExcelPackage(new FileInfo(templateFilePath)))
            {
                using (ExcelPackage newPackage = new ExcelPackage())
                {
                    foreach (var worksheet in templatePackage.Workbook.Worksheets)
                    {
                        string newWorksheetName = sheetNames[sheetIndex++];
                        var newWorksheet = newPackage.Workbook.Worksheets.Add(newWorksheetName);

                        if (sheetIndex <= 2)
                        {
                            int maxRowsToCopy = Math.Min(8, worksheet.Dimension.Rows);

                            for (int i = 0; i < options; i++)
                            {
                                // 定义要复制的源范围
                                var sourceRange = worksheet.Cells[1, 1, maxRowsToCopy, worksheet.Dimension.End.Column];

                                // 计算目标行
                                int targetRow = i * (maxRowsToCopy + spacing) + 1;
                                var destinationRange = newWorksheet.Cells[targetRow, 1];

                                // 复制源范围到目标范围
                                sourceRange.Copy(destinationRange);

                                // 替换占位符
                                ReplacePlaceholders(newWorksheet, maps[$"map{i}"], targetRow, sourceRange.Rows, sourceRange.Columns);

                                // 设置目标行的高度
                                for (int row = 0; row < maxRowsToCopy; row++)
                                {
                                    newWorksheet.Row(targetRow + row).Height = worksheet.Row(row + 1).Height; // 行索引从1开始
                                }
                            }
                            for (int col = worksheet.Dimension.Start.Column; col <= worksheet.Dimension.End.Column; col++)
                            {
                                newWorksheet.Column(col).Width = worksheet.Column(col).Width;
                            }
                        }
                        else
                        {
                            //数据部分
                            int[] sourceRows = { 3, 6, 10, 13 }; 
                            for (int i = 0; i < sourceRows.Length; i++)
                            {
                                int sourceRow = sourceRows[i];
                                int targetStartRow = sourceRow + i * options; 
                                var sourceRange = worksheet.Cells[sourceRow, 1, sourceRow, worksheet.Dimension.End.Column];

                                if (sourceRange.Merge)
                                {
                                    sourceRange.Merge = false;
                                }

                                for (int j = 0; j < options; j++)
                                {
                                    var destinationRange = newWorksheet.Cells[targetStartRow + j, 1];
                                    sourceRange.Copy(destinationRange);
                                    ReplacePlaceholders(newWorksheet, maps[$"map{j}"], targetStartRow + j, sourceRange.Rows, sourceRange.Columns);
                                    newWorksheet.Row(targetStartRow + j).Height = worksheet.Row(sourceRow).Height;

                                    if (targetStartRow + j >= 3 && targetStartRow + j <= 5 + 2 * options)
                                    {
                                        var borderColumns = new[] { 12, 15 };
                                        //第15列和13列会丢失边框，手动加上
                                        foreach (var col in borderColumns)
                                        {
                                            var borderRange = newWorksheet.Cells[targetStartRow + j, col];
                                            borderRange.Style.Border.Top.Style = OfficeOpenXml.Style.ExcelBorderStyle.Medium;
                                            borderRange.Style.Border.Bottom.Style = OfficeOpenXml.Style.ExcelBorderStyle.Medium;
                                            borderRange.Style.Border.Left.Style = OfficeOpenXml.Style.ExcelBorderStyle.Medium;
                                            borderRange.Style.Border.Right.Style = OfficeOpenXml.Style.ExcelBorderStyle.Medium;
                                        }
                                    }
                                }
                            }

                            // 表头部分
                            int[][] sheetHead = new int[4][];
                            sheetHead[0] = new int[] { 1, 2 };
                            sheetHead[1] = new int[] { 4, 5 };
                            sheetHead[2] = new int[] { 8, 9 };
                            sheetHead[3] = new int[] { 11, 12 };

                            for (int i = 0; i < sheetHead.Length; i++) 
                            {
                                int endRow = sourceRows[i]+i*options;

                                if (endRow - 2 < 1 || endRow - 1 < 1)
                                {
                                    continue;
                                }

                                var sourceRange = worksheet.Cells[sheetHead[i][0], 1, sheetHead[i][1], worksheet.Dimension.End.Column];
                                var destinationRange = newWorksheet.Cells[endRow - 2, 1, endRow - 1, worksheet.Dimension.End.Column];

                                sourceRange.Copy(destinationRange);
                                for (int j = 0; j < options; j++)
                                {
                                    // 计算目标行
                                    int targetRow = endRow - 2 + j;

                                    // 调用 ReplacePlaceholders
                                    ReplacePlaceholders(newWorksheet, maps[$"map{j}"], targetRow, sourceRange.Rows, sourceRange.Columns);
                                }

                                newWorksheet.Row(endRow - 2).Height = worksheet.Row(sheetHead[i][0]).Height;
                                newWorksheet.Row(endRow - 1).Height = worksheet.Row(sheetHead[i][1]).Height;
                            }

                            // 列宽
                            for (int col = worksheet.Dimension.Start.Column; col <= worksheet.Dimension.End.Column; col++)
                            {
                                newWorksheet.Column(col).Width = worksheet.Column(col).Width;
                            }
                        }

                    }
                    newPackage.SaveAs(new FileInfo(newFilePath));
                }
            }
            Response.AddHeader("Content-disposition", "attachment;filename=\"" + fileName + "\"");
            return new FilePathResult(newFilePath, UploadHelper.GetMimeType(newFilePath));
        }

        private void ReplacePlaceholders(ExcelWorksheet worksheet, Dictionary<string, object> map, int startRow, int rowCount, int colCount)
        {
            for(int row = startRow; row < startRow + rowCount; row++)
            {
                for(int col = 1; col <= colCount; col++)
                {
                    var cell = worksheet.Cells[row, col];
                    if (cell.Value != null && cell.Value is string)
                    {
                        string cellValue = cell.Text;

                        foreach (var kvp in map)
                        {
                            string placeholder = "{" + kvp.Key + "}";
                            if (cellValue.Contains(placeholder))
                            {
                                var replacementValue = kvp.Value;
                                if (replacementValue is double || replacementValue is int)
                                {
                                    cellValue = cellValue.Replace(placeholder, replacementValue.ToString());
                                    double numericValue;
                                    if (double.TryParse(cellValue, out numericValue))
                                    {
                                        cell.Value = numericValue;
                                    }
                                    else
                                    {
                                        cell.Value = cellValue;
                                    }
                                }
                                else if (replacementValue.ToString().EndsWith("%"))
                                {
                                    if (double.TryParse(replacementValue.ToString().TrimEnd('%'), out double percentageValue))
                                    {
                                        cell.Value = percentageValue / 100;
                                        cell.Style.Numberformat.Format = "0%";
                                    }
                                    else
                                    {
                                        cellValue = cellValue.Replace(placeholder, replacementValue.ToString());
                                    }
                                }
                                else
                                {
                                    cellValue = cellValue.Replace(placeholder, replacementValue.ToString());
                                }
                            }
                        }

                        if (!(cell.Value is double || cell.Value is int))
                        {
                            cell.Value = cellValue;
                        }
                    }
                }
            }
        }


        public Dictionary<string, object> Summary1(string yearMonth, string vendor, string pdcl, string type, IDbConnection connection)
        {
            Dictionary<string, object> map = new Dictionary<string, object>();
            var curMonth = DateTime.ParseExact(yearMonth, "yyyy-MM", CultureInfo.InvariantCulture);
            int month = curMonth.Month; // 当前月份值
            int year = curMonth.Year; // 当前年份值
            int yearSimple = year % 100; // 简化年份
            DateTime prevMonth = curMonth.AddMonths(-1); // 前一月的年月值
            string prevYearMonth = prevMonth.ToString("yyyy-MM"); // 格式化为字符串
            int monthLast = prevMonth.Month; // 前一月月份值
            int yearMinus1 = year - 1;
            int yearMinus1Simple = yearMinus1 % 100; // 去掉世纪
            int yearSimplePlus1 = yearSimple + 1; // 2099 后不是正确的年份

            string monthStr = (month > 9) ? month.ToString() : "0" + month; // 当前月份字符串
            string monthMinus1Str = (monthLast > 9) ? monthLast.ToString() : "0" + monthLast; // 前一月月份字符串
            string vendorStr = vendor;
            string pdclStr = pdcl;
            string typeStr = type;

            List<int> pp = new List<int>(GetPP(curMonth.ToString("yyyy-MM"), vendorStr, pdclStr, typeStr,connection));
            List<int> tb = new List<int>(GetTB(curMonth.ToString("yyyy-MM"), vendorStr, pdclStr, typeStr, connection));

            List<int> stock = GetSTOCK(curMonth.ToString("yyyy-MM"), vendorStr, pdclStr, typeStr, connection);
            List<int> tbPrev = new List<int>();
            List<int> ppPrev = new List<int>();

            if (month == 1)
            {
                tbPrev.AddRange(tb.Take(11));
                List<int> middleTB = GetTB(prevYearMonth, vendorStr, pdclStr, typeStr, connection).Skip(23).Take(13).ToList();
                tbPrev.AddRange(middleTB);
                tbPrev.AddRange(Enumerable.Repeat(0, 12)); // 添加 12 个 0

                ppPrev.AddRange(pp.Take(11));
                List<int> middlePP = GetPP(prevYearMonth, vendorStr, pdclStr, typeStr, connection).Skip(23).Take(13).ToList();
                ppPrev.AddRange(middlePP);
                ppPrev.AddRange(Enumerable.Repeat(0, 12)); // 添加 12 个 0
            }
            else if (month < 7)
            {
                tbPrev.AddRange(tb.Take(month + 10));
                List<int> middleTB = GetTB(prevYearMonth, vendorStr, pdclStr, typeStr, connection).Skip(month + 10).Take(23).ToList();
                tbPrev.AddRange(middleTB);

                ppPrev.AddRange(pp.Take(month + 10));
                List<int> middlePP = GetPP(prevYearMonth, vendorStr, pdclStr, typeStr, connection).Skip(month + 10).Take(23).ToList();
                ppPrev.AddRange(middlePP);
            }
            else
            {
                tbPrev.AddRange(tb.Take(12 + month - 2));
                List<int> middleTB = GetTB(prevYearMonth, vendorStr, pdclStr, typeStr, connection).Skip(12 + month - 2).Take(24).ToList();
                tbPrev.AddRange(middleTB);

                ppPrev.AddRange(pp.Take(12 + month - 2));
                List<int> middlePP = GetPP(prevYearMonth, vendorStr, pdclStr, typeStr, connection).Skip(12 + month - 2).Take(24).ToList();
                ppPrev.AddRange(middlePP);
            }

            map["Year"] = year;
            map["YearSimple"] = yearSimple;
            map["YearMinus1"] = yearMinus1;
            map["YearMinus1Simple"] = yearMinus1Simple;
            map["Month"] = monthStr;
            map["MonthMinus1"] = monthMinus1Str;
            map["YearSimplePlus1"] = yearSimplePlus1;
            map["vendor"] = vendorStr;
            map["PDCL"] = pdclStr;
            map["type"] = typeStr;
            map["YearPlus1"] = year + 1;

            for (int i = 0; i <= 11; i++)
            {
                map[$"TBMinus1Last{i}"] = tbPrev[i];
            }
            for (int i = 0; i <= 11; i++)
            {
                map[$"TBMinus1{i}"] = tb[i];
            }
            for (int i = 12; i <= 23; i++)
            {
                map[$"TBLast{i - 12}"] = tbPrev[i];
            }
            for (int i = 12; i <= 23; i++)
            {
                map[$"TB{i - 12}"] = tb[i];
            }

            double tbMinus1Total = tb.Take(12).Sum();
            double tbTotal = tb.Skip(12).Take(12).Sum(); 
            double tbLastTotal = tbPrev.Skip(12).Take(12).Sum();
            double tbPlus1Total = tb.Skip(24).Take(12).Sum(); 
            double tbPlus1LastTotal = tbPrev.Skip(24).Take(12).Sum();

            map["TBMinus1LastHY0"]= tbPrev.Take(6).Sum();
            map["TBMinus1LastHY1"] = tbPrev.Skip(6).Take(6).Sum();
            map["TBMinus1LastTotal"] = tbPrev.Take(12).Sum();
            map["TBLastHY0"] = tbPrev.Skip(12).Take(6).Sum();
            map["TBLastHY1"] = tbPrev.Skip(18).Take(6).Sum();
            map["TBPlus1LastHY0"] = tbPrev.Skip(24).Take(6).Sum();
            map["TBPlus1LastHY1"] = tbPrev.Skip(30).Take(6).Sum();
            map["TBPlus1LastTotal"] = tbPlus1LastTotal; 
            map["TBLastTotal"] = tbLastTotal;
            map["TBMinus1HY0"] = tb.Take(6).Sum();
            map["TBMinus1HY1"] = tb.Skip(6).Take(6).Sum();
            map["TBMinus1Total"] = tbMinus1Total;
            map["TBHY0"] = tb.Skip(12).Take(6).Sum();
            map["TBHY1"] = tb.Skip(18).Take(6).Sum();
            map["TBPlus1HY0"] = tb.Skip(24).Take(6).Sum();
            map["TBPlus1HY1"] = tb.Skip(30).Take(6).Sum();
            map["TBPlus1Total"] = tbPlus1Total;
            map["TBTotal"] = tbTotal; 

            // 计算比率
            string tbDivideTBLast = (tbLastTotal != 0.0) ? Math.Round((tbTotal / tbLastTotal - 1) * 100) + "%" : "infinity";
            string tbPlus1DivideTBPlus1Last = (tbPlus1LastTotal != 0.0) ? Math.Round((tbPlus1Total / tbPlus1LastTotal - 1) * 100) + "%" : "infinity";

            map["TBDivideTBLast"] = tbDivideTBLast;
            map["TBPlus1DivideTBPlus1Last"] = tbPlus1DivideTBPlus1Last;

            for (int i = 0; i <= 11; i++)
            {
                map[$"STOCKMinus1{i}"] = stock[i];
            }
            for (int i = 12; i <= 23; i++)
            {
                map[$"STOCK{i - 12}"] = stock[i];
            }

            // PP 数据
            for (int i = 0; i <= 11; i++)
            {
                map[$"PPMinus1Last{i}"] = ppPrev[i];
            }
            for (int i = 0; i <= 11; i++)
            {
                map[$"PPMinus1{i}"] = pp[i];
            }
            for (int i = 12; i <= 23; i++)
            {
                map[$"PPLast{i - 12}"] = ppPrev[i];
            }
            for (int i = 12; i <= 23; i++)
            {
                map[$"PP{i - 12}"] = pp[i];
            }

            // 计算总和
            double ppMinus1Total = pp.Take(12).Sum(); 
            double ppTotal = pp.Skip(12).Take(12).Sum(); 
            double ppPlus1Total = pp.Skip(24).Take(12).Sum(); 
            double ppPlus1LastTotal = ppPrev.Skip(24).Take(12).Sum(); 
            double ppLastTotal = ppPrev.Skip(12).Take(12).Sum();

            map["PPMinus1LastHY0"] = ppPrev.Take(6).Sum();
            map["PPMinus1LastHY1"] = ppPrev.Skip(6).Take(6).Sum();
            map["PPMinus1LastTotal"] = ppPrev.Take(12).Sum();
            map["PPLastHY0"] = ppPrev.Skip(12).Take(6).Sum();
            map["PPLastHY1"] = ppPrev.Skip(18).Take(6).Sum();
            map["PPLastTotal"] = ppLastTotal;
            map["PPPlus1LastHY0"] = ppPrev.Skip(24).Take(6).Sum();
            map["PPPlus1LastHY1"] = ppPrev.Skip(30).Take(6).Sum();
            map["PPPlus1LastTotal"] = ppPlus1LastTotal;
            map["PPMinus1HY0"] = pp.Take(6).Sum();
            map["PPMinus1HY1"] = pp.Skip(6).Take(6).Sum();
            map["PPMinus1Total"] = ppMinus1Total;
            map["PPHY0"] = pp.Skip(12).Take(6).Sum();
            map["PPHY1"] = pp.Skip(18).Take(6).Sum();
            map["PPPlus1HY0"] = pp.Skip(24).Take(6).Sum();
            map["PPPlus1HY1"] = pp.Skip(30).Take(6).Sum();
            map["PPPlus1Total"] = ppPlus1Total;
            map["PPTotal"] = ppTotal;

            string ppDividePPMinus1Last = (ppLastTotal != 0.0) ? Math.Round(((double)ppTotal / ppLastTotal - 1) * 100) + "%" : "infinity";
            string ppPlus1DividePPPlus1Last = (ppPlus1LastTotal != 0.0) ? Math.Round(((double)ppPlus1Total / ppPlus1LastTotal - 1) * 100) + "%" : "infinity";

            map["PPDividePPMinus1Last"] = ppDividePPMinus1Last;
            map["PPPlus1DividePPPlus1Last"] = ppPlus1DividePPPlus1Last;

            for (int i = 24; i < 36; i++)
            {
                map[$"TBPlus1Last{i - 24}"] = tbPrev[i];
            }
            for (int i = 24; i < 36; i++)
            {
                map[$"TBPlus1{i - 24}"] = tb[i];
            }
            for (int i = 24; i < 36; i++)
            {
                map[$"STOCKPlus1{i - 24}"] = stock[i];
            }
            for (int i = 24; i < 36; i++)
            {
                map[$"PPPlus1Last{i - 24}"] = ppPrev[i];
            }
            for (int i = 24; i < 36; i++)
            {
                map[$"PPPlus1{i - 24}"] = pp[i];
            }

            map["PPLastHY0"] = ppPrev.Skip(12).Take(6).Sum();
            map["PPLastHY1"] = ppPrev.Skip(18).Take(6).Sum();
            map["PPLastTotal"] = ppPrev.Skip(12).Take(12).Sum();
            map["PPMinus1HY0"] = pp.Take(6).Sum();
            map["PPMinus1HY1"] = pp.Skip(6).Take(6).Sum();
            map["PPMinus1Total"] = pp.Take(12).Sum();
            map["PPHY0"] = pp.Skip(12).Take(6).Sum();
            map["PPHY1"] = pp.Skip(18).Take(6).Sum();
            map["PPTotal"] = pp.Skip(12).Take(12).Sum();

            for (int i = 0; i < 4; i++)
            {
                map[$"TBMinus1Q{i}"] = tb.Skip(3 * i).Take(3).Sum();
            }
            for (int i = 0; i < 4; i++)
            {
                map[$"TBQ{i}"] = tb.Skip(12 + 3 * i).Take(3).Sum();
            }
            for (int i = 0; i < 4; i++)
            {
                var tbMinus1QSum = tb.Skip(3 * i).Take(3).Sum();
                var tbQSum = tb.Skip(12 + 3 * i).Take(3).Sum();
                map[$"TBDivideTBMinus1Q{i}"] = tbMinus1QSum != 0.0
                    ? Math.Round(((double)tbQSum / tbMinus1QSum - 1) * 100) + "%"
                    : "infinity";
            }
            for (int i = 0; i < 2; i++)
            {
                var tbHYSum = tb.Skip(6 * i).Take(6).Sum();
                var tbNextHYSum = tb.Skip(12 + 6 * i).Take(6).Sum();
                map[$"TBDivideTBMinus1HY{i}"] = tbHYSum != 0.0
                    ? Math.Round(((double)tbNextHYSum / tbHYSum - 1) * 100) + "%"
                    : "infinity";
            }

            for (int i = 0; i < 4; i++)
            {
                map[$"PPMinus1Q{i}"] = pp.Skip(3 * i).Take(3).Sum();
            }
            for (int i = 0; i < 4; i++)
            {
                map[$"PPQ{i}"] = pp.Skip(12 + 3 * i).Take(3).Sum();
            }
            for (int i = 0; i < 4; i++)
            {
                var ppMinus1QSum = pp.Skip(3 * i).Take(3).Sum();
                var ppQSum = pp.Skip(12 + 3 * i).Take(3).Sum();
                map[$"PPDividePPMinus1Q{i}"] = ppMinus1QSum != 0.0
                    ? Math.Round(((double)ppQSum / ppMinus1QSum - 1) * 100) + "%"
                    : "infinity";
            }
            for (int i = 0; i < 2; i++)
            {
                var ppHYSum = pp.Skip(6 * i).Take(6).Sum();
                var ppNextHYSum = pp.Skip(12 + 6 * i).Take(6).Sum();
                map[$"PPDividePPMinus1HY{i}"] = ppHYSum != 0.0
                    ? Math.Round(((double)ppNextHYSum / ppHYSum - 1) * 100) + "%"
                    : "infinity";
            }

            for (int i = 0; i < 4; i++)
            {
                var tbSum = tb.Take(12).Sum();
                var tbMinus1QSum = tb.Skip(3 * i).Take(3).Sum();
                map[$"TBMinus1Q{i}Percent"] = tbSum != 0.0
                    ? Math.Round(((double)tbMinus1QSum / tbSum) * 100) + "%"
                    : "infinity";
            }
            for (int i = 0; i < 4; i++)
            {
                var tbNextSum = tb.Skip(12).Take(12).Sum();
                var tbQSum = tb.Skip(12 + 3 * i).Take(3).Sum();
                map[$"TBQ{i}Percent"] = tbNextSum != 0.0
                    ? Math.Round(((double)tbQSum / tbNextSum) * 100) + "%"
                    : "infinity";
            }
            for (int i = 0; i < 4; i++)
            {
                var ppSum = pp.Take(12).Sum();
                var ppMinus1QSum = pp.Skip(3 * i).Take(3).Sum();
                map[$"PPMinus1Q{i}Percent"] = ppSum != 0.0
                    ? Math.Round(((double)ppMinus1QSum / ppSum) * 100) + "%"
                    : "infinity";
            }
            for (int i = 0; i < 4; i++)
            {
                var ppNextSum = pp.Skip(12).Take(12).Sum();
                var ppQSum = pp.Skip(12 + 3 * i).Take(3).Sum();
                map[$"PPQ{i}Percent"] = ppNextSum != 0.0
                    ? Math.Round(((double)ppQSum / ppNextSum) * 100) + "%"
                    : "infinity";
            }

            for (int i = 0; i < 4; i++)
            {
                map[$"TBPlus1Q{i}"] = tb.Skip(24 + 3 * i).Take(3).Sum();
            }
            for (int i = 0; i < 4; i++)
            {
                map[$"PPPlus1Q{i}"] = pp.Skip(24 + 3 * i).Take(3).Sum();
            }

            for (int i = 0; i < 4; i++)
            {
                var tbPlus1Sum = tb.Skip(24 + 3 * i).Take(3).Sum();
                var tbTotalSum = tb.Skip(24).Take(12).Sum();
                map[$"TBPlus1Q{i}Percent"] = tbTotalSum != 0.0
                    ? Math.Round(((double)tbPlus1Sum / tbTotalSum) * 100) + "%"
                    : "infinity";
            }

            for (int i = 0; i < 4; i++)
            {
                var ppPlus1Sum = pp.Skip(24 + 3 * i).Take(3).Sum();
                var ppTotalSum = pp.Skip(24).Take(12).Sum();
                map[$"PPPlus1Q{i}Percent"] = ppTotalSum != 0.0
                    ? Math.Round(((double)ppPlus1Sum / ppTotalSum) * 100) + "%"
                    : "infinity";
            }

            for (int i = 0; i < 4; i++)
            {
                var tbQSum = tb.Skip(12 + 3 * i).Take(3).Sum();
                var tbPlus1Sum = tb.Skip(24 + 3 * i).Take(3).Sum();
                map[$"TBPlus1DivideTBQ{i}"] = tbQSum != 0.0
                    ? Math.Round(((double)tbPlus1Sum / tbQSum - 1) * 100) + "%"
                    : "infinity";
            }

            for (int i = 0; i < 4; i++)
            {
                var ppQSum = pp.Skip(12 + 3 * i).Take(3).Sum();
                var ppPlus1Sum = pp.Skip(24 + 3 * i).Take(3).Sum();
                map[$"PPPlus1DividePPQ{i}"] = ppQSum != 0.0
                    ? Math.Round(((double)ppPlus1Sum / ppQSum - 1) * 100) + "%"
                    : "infinity";
            }

            for (int i = 0; i < 2; i++)
            {
                var tbHYSum = tb.Skip(12 + 6 * i).Take(6).Sum();
                var tbPlus1HYSum = tb.Skip(12 + 12 + 6 * i).Take(6).Sum();
                map[$"TBPlus1DivideTBHY{i}"] = tbHYSum != 0.0
                    ? Math.Round(((double)tbPlus1HYSum / tbHYSum - 1) * 100) + "%"
                    : "infinity";
            }
            for (int i = 0; i < 2; i++)
            {
                map[$"PPPlus1DividePPHY{i}"] = (pp.Skip(12 + 6 * i).Take(6).Sum() != 0.0)
                    ? Math.Round(((double)pp.Skip(12 + 12 + 6 * i).Take(6).Sum() / pp.Skip(12 + 6 * i).Take(6).Sum() - 1) * 100) + "%"
                    : "infinity";
            }

            int quarter = (month - 1) / 3;
            for (int i = 0; i < 4; i++)
            {
                map[$"soldState{i}"] = "forecast";
                map[$"grState{i}"] = "forecast";
            }

            for (int i = 0; i < quarter; i++)
            {
                map[$"soldState{i}"] = "sold";
                map[$"grState{i}"] = "GR";
            }

            string TBDivideTBMinus1 = (tbMinus1Total != 0.0)
                ? Math.Round((tbTotal / tbMinus1Total - 1) * 100) + "%"
                : "infinity";

            string PPDividePPMinus1 = (ppMinus1Total != 0.0)
                ? Math.Round((ppTotal / ppMinus1Total - 1) * 100) + "%"
                : "infinity";

            string TBPlus1DivideTB = (tbTotal != 0.0)
                ? Math.Round((tbPlus1Total / tbTotal - 1) * 100) + "%"
                : "infinity";

            string PPPlus1DividePP = (ppTotal != 0.0)
                ? Math.Round((ppPlus1Total / ppTotal - 1) * 100) + "%"
                : "infinity";

            map["TBDivideTBMinus1"] = TBDivideTBMinus1;
            map["PPDividePPMinus1"] = PPDividePPMinus1;
            map["TBPlus1DivideTB"] = TBPlus1DivideTB;
            map["PPPlus1DividePP"] = PPPlus1DividePP;

            return map;

        }

        public List<int> GetTB(string yearMonth, string vendor, string pdcl, string type, IDbConnection connection)
        {
            var curMonth = DateTime.ParseExact(yearMonth, "yyyy-MM", null);
            int month = curMonth.Month; // Current month value

            // TB clustering
            int counttb = month > 6 ? 25 - month : 13 - month;
            StringBuilder sql = new StringBuilder("SELECT ");
            for (int i = 0; i < counttb; i++)
            {
                sql.Append($"SUM(tb{i}) AS totalTB{i}, ");
            }
            sql.Length -= 2; // Remove the last comma and space
            sql.Append($" FROM [data_entry] WHERE year_month = '{yearMonth}'");

            // Add conditions for vendor, pdcl, and type if they are not null
            if (!string.IsNullOrEmpty(vendor))
            {
                sql.Append($" AND vendor = '{vendor}'");
            }
            if (!string.IsNullOrEmpty(pdcl))
            {
                sql.Append($" AND pdcl = '{pdcl}'");
            }
            if (!string.IsNullOrEmpty(type))
            {
                sql.Append($" AND type = '{type}'");
            }

            //var parameters = new
            //{
            //    YearMonth = yearMonth,
            //    Vendor = vendor,
            //    Pdcl = pdcl,
            //    Type = type
            //};

            //var resultstb = connection.Query(sql.ToString(), parameters).Select(row =>
            //    Enumerable.Range(0, counttb).Select(i => (int)row[$"totalTB{i}"]).ToArray()).ToList();
            IDictionary<string, object> resultstb = connection.Query(sql.ToString()).ToList()[0];
            List<int> outputpp = Enumerable.Range(0, counttb)
            .Select(i =>
            {
                object value;
                resultstb.TryGetValue($"totalTB{i}", out value);
                return value != null ? Convert.ToInt32(value) : 0; // 或者选择其他默认值
            })
            .ToList();

            // SOLD clustering
            int countsold = month + 11;
            sql.Clear();
            sql.Append("SELECT ");
            for (int i = 0; i < countsold; i++)
            {
                sql.Append($"SUM(sold_info{i}) AS totalSOLD{i}, ");
            }
            sql.Length -= 2; // Remove the last comma and space
            sql.Append($" FROM [sold_data_entry] WHERE year_month = '{yearMonth}'");

            // Add conditions for vendor, pdcl, and type if they are not null
            if (!string.IsNullOrEmpty(vendor))
            {
                sql.Append($" AND vendor = '{vendor}'");
            }
            if (!string.IsNullOrEmpty(pdcl))
            {
                sql.Append($" AND pdcl = '{pdcl}'");
            }
            if (!string.IsNullOrEmpty(type))
            {
                sql.Append($" AND type = '{type}'");
            }

            //var resultssold = connection.Query(sql.ToString(), parameters).Select(row =>
            //    Enumerable.Range(0, countsold).Select(i => (int)row[$"totalSOLD{i}"]).ToArray()).ToList();
            IDictionary<string, object> resultssold = connection.Query(sql.ToString()).ToList()[0];
            List<int> outputsold = Enumerable.Range(0, countsold)
            .Select(i =>
            {
                object value;
                resultssold.TryGetValue($"totalSOLD{i}", out value);
                return value != null ? Convert.ToInt32(value) : 0; // 或者选择其他默认值
            })
            .ToList();

            // Supplement data
            List<int> outputsupply = null;
            if (month < 7)
            {
                sql.Clear();
                sql.Append("SELECT ");
                for (int i = 13 - month; i < 19; i++)
                {
                    sql.Append($"SUM(tb{i}) AS totalSUPPLY{i}, ");
                }

                sql.Length -= 2; // Remove the last comma and space
                sql.Append($"  FROM [data_entry] WHERE year_month = '{yearMonth}'");

                if (!string.IsNullOrEmpty(vendor))
                {
                    sql.Append($" AND vendor = '{vendor}'");
                }
                if (!string.IsNullOrEmpty(pdcl))
                {
                    sql.Append($" AND pdcl = '{pdcl}'");
                }
                if (!string.IsNullOrEmpty(type))
                {
                    sql.Append($" AND type = '{type}'");
                }

                //var resultssupply = connection.Query(sql.ToString(), parameters).Select(row =>
                //    Enumerable.Range(13 - month, 6).Select(i => (int)row[$"totalSUPPLY{i}"]).ToArray()).ToList();
                //outputsupply = resultssupply.FirstOrDefault()?.ToList();
                IDictionary<string, object> resultssupply = connection.Query(sql.ToString()).ToList()[0];
                outputsupply = Enumerable.Range(13 - month, 6 + month)
                .Select(i =>
                {
                    object value;
                    resultssupply.TryGetValue($"totalSUPPLY{i}", out value);
                    return value != null ? Convert.ToInt32(value) : 0; // 或者选择其他默认值
                })
                .ToList();
            }

            // Merge outputs
            //var outputtb = resultstb.FirstOrDefault()?.ToList() ?? new List<int>();
            //var outputsold = resultssold.FirstOrDefault()?.ToList() ?? new List<int>();

            //var combined = outputsold.Concat(outputtb).ToList();
            //if (month < 7)
            //{
            //    var zeros = Enumerable.Repeat(0, 6 - month).ToList();
            //    outputsupply.AddRange(zeros);
            //    combined.AddRange(outputsupply);
            //}

            //return null;
            List<int> combined = outputsold.Concat(outputpp).ToList();
            if (month < 7)
            {
                List<int> zeros = Enumerable.Repeat(0, 6 - month).ToList();
                outputsupply.AddRange(zeros);
                combined = combined.Concat(outputsupply).ToList();
            }

            return combined;
        }

        public List<int> GetPP(string yearMonth, string vendor, string pdcl, string type, IDbConnection connection)
        {
            // Define filtering rules
            var curMonth = DateTime.ParseExact(yearMonth, "yyyy-MM", null);
            int month = curMonth.Month; // Current month value

            // PP clustering
            int countpp = month > 6 ? 25 - month : 13 - month;
            StringBuilder sql = new StringBuilder("SELECT ");
            for (int i = 0; i < countpp; i++)
            {
                sql.Append($"SUM(pp{i}) AS totalPP{i}, ");
            }
            sql.Length -= 2; // Remove the last comma and space
            sql.Append($" FROM [data_entry] WHERE year_month = '{yearMonth}'");

            if (!string.IsNullOrEmpty(vendor))
            {
                sql.Append($" AND vendor = '{vendor}'");
            }
            if (!string.IsNullOrEmpty(pdcl))
            {
                sql.Append($" AND pdcl = '{pdcl}'");
            }
            if (!string.IsNullOrEmpty(type))
            {
                sql.Append($" AND type = '{type}'");
            }

            //var parameters = new
            //{
            //    YearMonth = yearMonth,
            //    Vendor = vendor,
            //    Pdcl = pdcl,
            //    Type = type
            //};

            IDictionary<string, object> resultspp = connection.Query(sql.ToString()).ToList()[0];
            List<int> outputpp = Enumerable.Range(0, countpp)
            .Select(i =>
            {
                object value;
                resultspp.TryGetValue($"totalPP{i}", out value);
                return value != null ? Convert.ToInt32(value) : 0; // 或者选择其他默认值
            })
            .ToList();

            // GR clustering
            int countgr = month + 11;
            sql.Clear();
            sql.Append("SELECT ");
            for (int i = 0; i < countgr; i++)
            {
                sql.Append($"SUM(gr_info{i}) AS totalGR{i}, ");
            }
            sql.Length -= 2; // Remove the last comma and space
            sql.Append($" FROM [gr_data_entry] WHERE year_month = '{yearMonth}'");

            // Add conditions for vendor, pdcl, and type if they are not null
            if (!string.IsNullOrEmpty(vendor))
            {
                sql.Append($" AND vendor = '{vendor}'");
            }
            if (!string.IsNullOrEmpty(pdcl))
            {
                sql.Append($" AND pdcl = '{pdcl}'");
            }
            if (!string.IsNullOrEmpty(type))
            {
                sql.Append($" AND type = '{type}'");
            }

            //var resultsgr = connection.Query(sql.ToString(), parameters).Select(row =>
            //    Enumerable.Range(0, countgr).Select(i => (int)row[$"totalGR{i}"]).ToArray()).ToList();
            IDictionary<string, object> resultsgr = connection.Query(sql.ToString()).ToList()[0];
            List<int> outputgr = Enumerable.Range(0, countgr)
            .Select(i =>
            {
                object value;
                resultsgr.TryGetValue($"totalGR{i}", out value);
                return value != null ? (int)Math.Floor(Convert.ToDouble(value)) : 0;
            })
            .ToList();

            // Supplement data
            List<int> outputsupply = null;
            if (month < 7)
            {
                sql.Clear();
                sql.Append("SELECT ");
                for (int i = 13 - month; i < 19; i++)
                {
                    sql.Append($"SUM(pp{i}) AS totalSUPPLY{i}, ");
                }

                sql.Length -= 2; // Remove the last comma and space
                sql.Append($"  FROM [data_entry] WHERE year_month = '{yearMonth}'");

                if (!string.IsNullOrEmpty(vendor))
                {
                    sql.Append($" AND vendor = '{vendor}'");
                }
                if (!string.IsNullOrEmpty(pdcl))
                {
                    sql.Append($" AND pdcl = '{pdcl}'");
                }
                if (!string.IsNullOrEmpty(type))
                {
                    sql.Append($" AND type = '{type}'");
                }

                //var resultssupply = connection.Query(sql.ToString(), parameters).Select(row =>
                //    Enumerable.Range(13 - month, 6).Select(i => (int)row[$"totalSUPPLY{i}"]).ToArray()).ToList();
                IDictionary<string, object> resultssupply = connection.Query(sql.ToString()).ToList()[0];
                outputsupply = Enumerable.Range(13 - month, 6+month)
                .Select(i =>
                {
                    object value;
                    resultssupply.TryGetValue($"totalSUPPLY{i}", out value);
                    return value != null ? Convert.ToInt32(value) : 0; // 或者选择其他默认值
                })
                .ToList();
                //outputsupply = resultssupply.FirstOrDefault()?.ToList();
            }

            // Merge outputs
            //var outputpp = resultspp.FirstOrDefault()?.ToList() ?? new List<int>();
            //var outputgr = resultsgr.FirstOrDefault()?.ToList() ?? new List<int>();

            List<int> combined = outputgr.Concat(outputpp).ToList();
            if (month < 7)
            {
                List<int> zeros = Enumerable.Repeat(0, 6 - month).ToList();
                outputsupply.AddRange(zeros);
                combined = combined.Concat(outputsupply).ToList();
            }

            return combined;
        }

        public List<int> GetSTOCK(string yearMonth, string vendor, string pdcl, string type, IDbConnection connection)
        {
            // Define filtering rules
            var curMonth = DateTime.ParseExact(yearMonth, "yyyy-MM", null);
            int month = curMonth.Month; // Current month value

            // Stock clustering
            int countstock = month + 11;
            StringBuilder sql = new StringBuilder("SELECT ");
            for (int i = 0; i < countstock; i++)
            {
                sql.Append($"SUM(stock_info{i}) AS totalSTOCK{i}, ");
            }
            sql.Length -= 2; // Remove the last comma and space
            sql.Append($" FROM [stock_entry] WHERE year_month = '{yearMonth}'");

            // Add conditions for vendor, pdcl, and type if they are not null
            if (!string.IsNullOrEmpty(vendor))
            {
                sql.Append($" AND vendor = '{vendor}'");
            }
            if (!string.IsNullOrEmpty(pdcl))
            {
                sql.Append($" AND pdcl = '{pdcl}'");
            }
            if (!string.IsNullOrEmpty(type))
            {
                sql.Append($" AND type = '{type}'");
            }

            //var parameters = new
            //{
            //    YearMonth = yearMonth,
            //    Vendor = vendor,
            //    Pdcl = pdcl,
            //    Type = type
            //};

            //var resultsstock = connection.Query(sql.ToString(), parameters)
            //    .Select(row => Enumerable.Range(0, countstock).Select(i => (int)row[$"totalSTOCK{i}"]).ToArray())
            //    .ToList();
            //List<int> outputstock = resultsstock.FirstOrDefault()?.ToList() ?? new List<int>();
            IDictionary<string, object> resultsstock = connection.Query(sql.ToString()).ToList()[0];
            List<int> outputstock = Enumerable.Range(0, countstock)
            .Select(i =>
            {
                object value;
                resultsstock.TryGetValue($"totalSTOCK{i}", out value);
                return value != null ? (int)Math.Floor(Convert.ToDouble(value)) : 0;
            })
            .ToList();

            // Supplement data and merge output
            List<int> combined=null;
            List<int> outputsupply = Enumerable.Repeat(0, 25 - month).ToList();
            combined = outputstock.Concat(outputsupply).ToList();

            return combined; // Return 36 data points representing last year, this year, and next year's stock
        }

    }
}
