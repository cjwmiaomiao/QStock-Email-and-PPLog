using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Net;
using System.Net.Mail;
using System.Net.Configuration;

namespace SendEmailTest
{
    class Program
    {
        static void Main()
        {
            // 从数据库拉取数据并发送邮件
            GetDataAndSendEmails();
        }

        static void GetDataAndSendEmails()
        {
            string connectionString = ConfigurationManager.AppSettings["DBConStr"];
            List<Table> tableList = new List<Table>();
            List<IdEmail> emailList = new List<IdEmail>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                string sql = "SELECT * FROM [StartSharp1_Default_v1].[dbo].[Q_Stock];";
                SqlDataReader dataReader = new SqlCommand(sql, connection).ExecuteReader();

                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        tableList.Add(new Table
                        {
                            Material = Convert.ToString(dataReader["Material"].ToString()),
                            Qty = Convert.ToDouble(dataReader["qty"].ToString()),
                            Reason = Convert.ToString(dataReader["reason"].ToString() ?? null)
                        });
                    }
                }
                dataReader.Close();

                // 获取所有的 Email

                string emailSql = "select oo.Material,oo.Sales,em.Email from[StartSharp1_Default_v1].[dbo].[EmailMap] em left join[StartSharp1_Default_v1].[dbo].[OOH] oo on em.Sales = oo.Sales;";
                SqlDataReader emailReader = new SqlCommand(emailSql, connection).ExecuteReader();

                if (emailReader.HasRows)
                {
                    while (emailReader.Read())
                    {
                        //emailList.Add(emailReader["Email"].ToString());
                        emailList.Add(new IdEmail
                        {
                            Material = Convert.ToString(emailReader["Material"]),
                            Sales = Convert.ToString(emailReader["Sales"]),
                            Email = Convert.ToString(emailReader["Email"])
                        });
                    }
                }
                emailReader.Close();
            }

            foreach(var item in emailList)
            {
                string emailMaterial = item.Material;
                List<Table> tableListShort = new List<Table>();
                foreach (var element in tableList)
                {
                    if (element.Material == emailMaterial)
                    {
                        tableListShort.Add(element);
                    }
                }

                SendEmail(item.Email, GetEmailForTestBody(item.Sales, tableListShort),item.Sales);
            }
        }

        public static string GetEmailForTestBody(string sendto,List<Table> tableInfo)
        {
            string opentable = string.Empty;

            if (tableInfo != null && tableInfo.Count > 0)
            {
                foreach (var item in tableInfo)
                {
                    opentable += string.Format("<tr> " +
                        " <td> {0} </td> " +
                        " <td> {1} </td>" +
                        " <td> {2} </td>" +
                        "</tr>",
                   item.Material, item.Qty, item.Reason);
                }
                opentable = " <table> " +
                 "<tr> " +
                 "<th> Material </th>  " +
                 "<th> Qty </th> " +
                 "<th> Reason </th> " +
                 "</tr> " +
                 " " + opentable + " </table>";
            }

            return Properties.Resources.EmailforTest
                .Replace("[DisplayName]", sendto)
                .Replace("[Table]", opentable);
        }

        static void SendEmail(string email, string body,string SalesId)
        {
            string subject = "Q_Stock Table Data";
            var smtpSection = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");
            string ccEmail = ConfigurationManager.AppSettings["EmailAddress"];
            string fromAddress = smtpSection.From;
            string host = smtpSection.Network.Host;
            int port = smtpSection.Network.Port;
            string userName = smtpSection.Network.UserName;
            string password = smtpSection.Network.Password;
            bool enableSsl = smtpSection.Network.EnableSsl;

            MailMessage mail = new MailMessage(fromAddress, email)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };
            mail.CC.Add(ccEmail);
            SmtpClient smtpClient = new SmtpClient(host)
            {
                Port = port,
                Credentials = new NetworkCredential(userName, password),
                EnableSsl = enableSsl
            };

            //初始化日志
            DateTime sendTime = DateTime.Now;
            string sendStatus = "Success";
            string failureReason = null;

            try
            {
                smtpClient.Send(mail);
                Console.WriteLine($"Email sent to {email}");
            }
            catch (Exception ex)
            {
                sendStatus = "false";
                failureReason = ex.Message;
                Console.WriteLine($"Failed to send email to {email}. Error: {ex.Message}");
            }
            finally
            {
                // 将发送日志添加到数据库
                LogEmail(SalesId,sendTime, sendStatus, failureReason);
            }
        }
        //日志写入表
        static void LogEmail(string SalesId,DateTime sendTime,string sendStatus,string failureReason)
        {
            string connectionString = ConfigurationManager.AppSettings["DBConStr"];
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string insertQuery = "INSERT INTO [StartSharp1_Default_v1].[dbo].[EmailLog] (SalesId, sendTime, sendStatus, failReason)" +
                    "VALUES (@SalesId, @SendTime, @SendStatus, @FailureReason);";
                SqlCommand command = new SqlCommand(insertQuery, connection);
                command.Parameters.AddWithValue("@SalesId", SalesId);
                command.Parameters.AddWithValue("@SendTime", sendTime); 
                command.Parameters.AddWithValue("@SendStatus", sendStatus);
                if (failureReason != null)
                {
                    command.Parameters.AddWithValue("@FailureReason", failureReason);
                }
                else
                {
                    // If failureReason is null, set it to DBNull.Value
                    command.Parameters.AddWithValue("@FailureReason", DBNull.Value);
                }
                try
                {
                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (Exception ex)
                {
                    // Handle exceptions, log them, or throw as needed
                    Console.WriteLine("Error inserting into EmailLog table: " + ex.Message);
                }
            }
        }
    }



    // 这是 Table 类的定义
    public class Table
    {
        public string Material { get; set; }
        public double Qty { get; set; }
        public string Reason { get; set; }
    }
    class IdEmail
    {
        public String Material { get; set; }
        public String Sales { get; set; }
        public String Email { get; set; }
    }
}
