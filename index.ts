

function totalEstimatedFactoryOverheads(supervisors: number, indirectLabor: number): void {
    const totalFactoryOverheads = supervisors + indirectLabor;
    console.log("Total Estimated factory overheads:", totalFactoryOverheads);  
}

const supervisors = 170000; // salary of supervisors
const indirectLabor = 175000; // wages of indirect Labor

totalEstimatedFactoryOverheads(supervisors, indirectLabor);
