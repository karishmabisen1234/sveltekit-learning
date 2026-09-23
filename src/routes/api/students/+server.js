export async function POST({ request }) {
  const data = await request.json();

  return new Response(
    JSON.stringify({
      message: "Student added",
      student: data,
    })
  );
}

export async function PUT({ request }) {
  const data = await request.json();

  return new Response(
    JSON.stringify({
      message: "Student updated completely",
      student: data,
    })
  );
}

export async function PATCH({ request }) {
  const data = await request.json();

  return new Response(
    JSON.stringify({
      message: "Student updated partially",
      student: data,
    })
  );
}

export async function DELETE({ request }) {
  const data = await request.json();

  return new Response(
    JSON.stringify({
      message: "Student deleted",
      student: data,
    })
  );
}
