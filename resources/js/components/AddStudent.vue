<template>
    <div class="card p-4 shadow">
        <h3>Agregar estudiante</h3>
        <div class="row m-0">
            <div class="col-md-6">
                <div id="form-teacher">
                    <div class="form-group">
                        <input
                            v-model="student.ci"
                            type="text"
                            name="ci"
                            id="ci"
                            class="form-control"
                        />
                        <label for="ci">Cedula</label>
                    </div>
                    <div class="form-group">
                        <input
                            v-model="student.name"
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                        />
                        <label for="name">Nombre</label>
                    </div>
                    <div class="form-group">
                        <input
                            v-model="student.lastname"
                            type="text"
                            name="lastname"
                            id="lastname"
                            class="form-control"
                        />
                        <label for="lastname">Apellido</label>
                    </div>
                    <div class="form-group">
                        <button
                            class="btn waves-effect waves-light"
                            @click="add"
                            v-if="!isEdit"
                        >
                            Agregar
                        </button>
                        <button
                            class="btn waves-effect waves-light"
                            @click="edit"
                            v-if="isEdit"
                        >
                            Editar
                        </button>
                        <button
                            class="btn waves-effect waves-light blue-grey lighten-3"
                            @click="clean"
                            v-if="isEdit"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div v-if="students.length == 0" class="text-warning">
                    Sin registros
                </div>
                <table v-else class="table-responsive">
                    <thead>
                        <tr>
                            <th>CI</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="s in students" :key="s.idperson">
                            <td>{{s.ci}}</td>
                            <td>{{ s.name }} {{ s.lastname }}</td>
                            <td>
                                <span
                                    ><span
                                        class="text-warning"
                                        @click="selectEdit(s.idstudent)"
                                        >Edit</span
                                    >
                                    |
                                    <span
                                        class="text-black-50"
                                        @click="destroy(s.idstudent)"
                                        >Delete</span
                                    ></span
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require("axios");
export default {
    data() {
        return {
            student: {
                ci: "",
                name: "",
                lastname: ""
            },
            students: [],
            isEdit: false
        };
    },
    methods: {
        add() {
            console.log(this.student);
            axios
                .post("/api/students/create", this.student)
                .then(newuser => {
                    console.log(newuser);
                    this.getAll();
                    this.student = {
                        ci: "",
                        name: "",
                        lastname: ""
                    };
                    alert("Usuario agregado");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getAll() {
            this.students = [];
            axios
                .get("/api/students")
                .then(({ data }) => {
                    this.students = data;
                    console.log(this.students);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        edit() {
            axios
                .put("/api/students/edit", this.student)
                .then(({ data }) => {
                    this.getAll();
                    alert("Usuario editado!");
                    console.log(data);
                    this.student = {
                        ci: "",
                        name: "",
                        lastname: ""
                    };
                    this.isEdit = false;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        destroy(id) {
            axios
                .delete(`/api/students/delete/${id}`)
                .then(data => {
                    this.getAll();
                    alert("Estudiante eliminado");
                    console.log("delete", data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        selectEdit(id) {
            console.log(id)
            axios
                .get(`/api/students/${id}`)
                .then(({ data }) => {
                    console.log("Data", data);
                    this.isEdit = true;
                    this.student.ci = data.ci;
                    this.student.name = data.name;
                    this.student.lastname = data.lastname;
                    this.student.idstudent = data.idstudent;
                    console.log(this.student);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        clean() {
            this.isEdit = false;
            this.student = {
                ci: "",
                name: "",
                lastname: ""
            };
        }
    },
    mounted() {
        this.getAll();
    }
};
</script>
