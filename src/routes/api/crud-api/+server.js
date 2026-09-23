let students = [
  { id: 1, name: "Karishma", age: 22 },
  { id: 2, name: "Rahul", age: 23 }
];

// GET - Read
export function GET() {
  return new Response(JSON.stringify(students), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// POST - Create
export async function POST({ request }) {
  const data = await request.json();

  const newStudent = {
    id: Date.now(),
    name: data.name,
    age: data.age
  };

  students.push(newStudent);

  return new Response(JSON.stringify(newStudent), {
    status: 201,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// PUT - Update
export async function PUT({ request }) {
  const data = await request.json();

  const index = students.findIndex(
    (student) => student.id === data.id
  );

  if (index === -1) {
    return new Response(
      JSON.stringify({ message: "Student not found" }),
      { status: 404 }
    );
  }

  students[index] = {
    id: data.id,
    name: data.name,
    age: data.age
  };

  return new Response(JSON.stringify(students[index]), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// DELETE - Delete
export async function DELETE({ request }) {
  const data = await request.json();

  students = students.filter(
    (student) => student.id !== data.id
  );

  return new Response(
    JSON.stringify({ message: "Student deleted" }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}