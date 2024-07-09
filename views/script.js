document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("alumno-form");
  const alumnosList = document.getElementById("alumnos-list");
  const apiUrl = "http://localhost:3000/api/alumnos";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const alumnoId = document.getElementById("alumno-id").value;
    const alumnoData = {
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      dni: document.getElementById("dni").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      direccion: document.getElementById("direccion").value,
    };

    if (alumnoId) {
      updateAlumno(alumnoId, alumnoData);
    } else {
      createAlumno(alumnoData);
    }

    form.reset();
    document.getElementById("alumno-id").value = "";
  });

  function fetchAlumnos() {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alumnosList.innerHTML = "";
        data.forEach((alumno) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${alumno.id_alumno}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellido}</td>
            <td>${alumno.dni}</td>
            <td>${alumno.email}</td>
            <td>${alumno.telefono}</td>
            <td>${alumno.direccion}</td>
            <td>
                <button class="edit" data-id="${alumno.id_alumno}">Editar</button>
                <button class="delete" data-id="${alumno.id_alumno}">Eliminar</button>
            </td>
          `;
          alumnosList.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  function createAlumno(alumno) {
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alumno),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        fetchAlumnos();
      })
      .catch((error) => {
        console.error("Error al crear el alumno:", error);
      });
  }

  function updateAlumno(id, alumno) {
    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alumno),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        fetchAlumnos();
      })
      .catch((error) => {
        console.error("Error al actualizar el alumno:", error);
      });
  }

  function deleteAlumno(id) {
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        fetchAlumnos();
      })
      .catch((error) => {
        console.error("Error al eliminar el alumno:", error);
      });
  }

  alumnosList.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit")) {
      const id = e.target.getAttribute("data-id");
      fetch(`${apiUrl}/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const alumno = data;
          document.getElementById("alumno-id").value = alumno.id_alumno;
          document.getElementById("nombre").value = alumno.nombre;
          document.getElementById("apellido").value = alumno.apellido;
          document.getElementById("dni").value = alumno.dni;
          document.getElementById("email").value = alumno.email;
          document.getElementById("telefono").value = alumno.telefono;
          document.getElementById("direccion").value = alumno.direccion;
        })
        .catch((error) => {
          console.error("Error al obtener el alumno:", error);
        });
    } else if (e.target.classList.contains("delete")) {
      const id = e.target.getAttribute("data-id");
      deleteAlumno(id);
    }
  });

  fetchAlumnos();
});
