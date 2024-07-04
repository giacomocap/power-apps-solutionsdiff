import XLSX from 'xlsx';

export class ListHelpers {
    static prepareDataForExport(firstRowStatic: { key: string, label: string }[], colNames: string[], items: any[], transformElement?: (item: any) => any) {
        const firstFinished = firstRowStatic.map(e => e.label).concat(colNames);
        const metadata = firstRowStatic.map(e => e.key);
        const data: any[][] = [firstFinished];
        const rowsData = items.map(e => {
            const roRet: any[] = [];
            Object.keys(e).filter(a => metadata.some(meta => meta === a)).forEach(a => {
                const el = e[a as any];
                let toRet = '---';
                if (el) {
                    toRet = el as any;
                }
                roRet.push(toRet);
            });
            colNames.forEach(name => {
                const el = e[name as any];
                if (transformElement) {
                    roRet.push(transformElement(el));
                } else {
                    let toPut: any = '---';
                    if (el && typeof (el) === "object") {
                        toPut = true;
                    }
                    roRet.push(toPut);
                }
            });

            return roRet;
        });
        const completeData = data.concat(rowsData);
        return completeData;
    }

    static exportList(firstRowStatic: { key: string, label: string }[], colNames: string[], items: any[], props: { Title?: string, Subject?: string, CreatedDate?: Date }, fileName: string, transformElement?: (item: any) => any) {
        const completeData = ListHelpers.prepareDataForExport(firstRowStatic, colNames, items, transformElement);

        const ws = XLSX.utils.aoa_to_sheet(completeData);
        const wb = XLSX.utils.book_new();
        const fullProps = { ...props, Author: "AlabDiffTool" };
        wb.Props = fullProps;
        XLSX.utils.book_append_sheet(wb, ws);
        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, fileName + ".xlsx")
    }
}