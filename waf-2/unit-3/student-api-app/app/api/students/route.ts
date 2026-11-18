import { NextResponse } from "next/server";

type Student = {
  id: number;
  name: string;
  marks: number;
};

let students: Student[] = [
  { id: 1, name: "Arun", marks: 85 },
  { id: 2, name: "Priya", marks: 92 },
  { id: 3, name: "Rahul", marks: 78 },
];

// GET /api/students
export async function GET() {
  return NextResponse.json(students);
}

// POST /api/students
export async function POST(request: Request) {
  const body = await request.json();

  const newStudent: Student = {
    id: Date.now(),
    name: body.name,
    marks: Number(body.marks),
  };

  students.push(newStudent);

  return NextResponse.json(
    {
      message: "Student created successfully",
      student: newStudent,
          },
    { status: 201 }
  );
}
