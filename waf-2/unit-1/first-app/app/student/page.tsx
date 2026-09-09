
// export default function StudentPage(){
//     throw new Error("Student page failed");
//     return(
//         <div>
//             <h1>Student Page</h1>
//         </div>
//     );


async function getStudents(){
    const respnse = await fetch("https://example.com/api/students");
    if (!respnse.ok){
        throw new Error("Failed to fetch students");
    }
    return respnse.json();
}
export default async function StudentPage(){
    const students = await getStudents();
    return(
        <div>
            <h1>Students</h1>
            {students.map((student: any) => (
                <p key={student.id}>
                    {student.name}
                </p>
            ))}
        </div>
    );
}
