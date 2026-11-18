let students = [
    { id: 1, name: "dora"},
    { id: 2, name: "mario"}
];
// GET /
export async function GET() {
    return Response.json(students); 
       }

// POST 
export async function POST(request: Request) {
    const student = await request.json();
    students.push(student);
    return Response.json({
        message: "Student added successfully",
        student: student
    });
}

//PUT
export async function PUT(request: Request) {
    const student = await request.json();
    const index = students.findIndex(
        s => s.id === student.id);

    if (index === -1) {
       return Response.json(
        {message: "Student not found"},
        {status: 404}
            );
        }
        students[index] = student;
        return Response.json({
            message: "Student updated successfully",
            students: students
        });
    }

// DELETE
export async function DELETE(request: Request) {
    const data = await request.json();
    students = students.filter(s => s.id !== data.id);
    return Response.json({
        message: "Student deleted successfully",
        students: students
    });
}