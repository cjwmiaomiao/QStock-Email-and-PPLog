namespace QStock.PPLog {
    /*Add present month*/
    @Serenity.Decorators.registerEditor()
    export class DataEntryImportEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            let currentDate = new Date();


            // 循环生成本月及过去五个月的选项
            for (let i = 0; i <= 5; i++) {
                // 获取当前循环的年份和月份
                let year = currentDate.getFullYear();
                let month = currentDate.getMonth() - i; // 获取过去的月份，注意 getMonth() 返回的是从 0 开始的月份

                // 如果月份小于 0，表示跨年了
                if (month < 0) {
                    year--;
                    month += 12; // 月份加 12，相当于向前推一年
                }

                // 格式化成 "yyyy-MM" 的字符串
                let formattedDate = year + "-" + (month < 9 ? "0" + (month + 1) : (month + 1));
                this.addOption(formattedDate, formattedDate)
            }
        }
    }
}