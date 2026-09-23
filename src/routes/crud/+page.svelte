<script>
  import { onMount } from "svelte";

  let students = $state([]);
  let name = $state("");
  let age = $state("");
  let editId = $state(null);


  async function getStudents() {
    const response = await fetch("/api/crud-api");
    students = await response.json();
  }


  async function addStudent() {
    await fetch("/api/crud-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        age: Number(age)
      })
    });

    name = "";
    age = "";

    getStudents();
  }

  async function updateStudent() {
    await fetch("/api/crud-api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: editId,
        name: name,
        age: Number(age)
      })
    });

    name = "";
    age = "";
    editId = null;

    getStudents();
  }

  
  async function deleteStudent(id) {
    await fetch("/api/crud-api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    });

    getStudents();
  }

  function editStudent(student) {
    editId = student.id;
    name = student.name;
    age = student.age;
  }

  // Page browser me load hone ke baad GET call
  onMount(() => {
    getStudents();
  });
</script>

<h1>Student CRUD</h1>

<input
  bind:value={name}
  placeholder="Enter name"
/>

<input
  type="number"
  bind:value={age}
  placeholder="Enter age"
/>

{#if editId}
  <button onclick={updateStudent}>
    Update Student
  </button>
{:else}
  <button onclick={addStudent}>
    Add Student
  </button>
{/if}

<hr />

<h2>Student List</h2>

{#each students as student}
  <div>
    <b>{student.name}</b> - {student.age}

    <button onclick={() => editStudent(student)}>
      Edit
    </button>

    <button onclick={() => deleteStudent(student.id)}>
      Delete
    </button>
  </div>
{/each}
```