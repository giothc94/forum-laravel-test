<template>
    <div class="card p-4 shadow">
        <h3>Agregar docente</h3>
        <div class="row m-0">
            <div class="col-md-6">
                <div id="form-teacher">
                    <div class="form-group">
                        <input
                            v-model="teacher.ci"
                            type="text"
                            name="ci"
                            id="ci"
                            class="form-control"
                        />
                        <label for="ci">Cedula</label>
                    </div>
                    <div class="form-group">
                        <input
                            v-model="teacher.name"
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                        />
                        <label for="name">Nombre</label>
                    </div>
                    <div class="form-group">
                        <input
                            v-model="teacher.lastname"
                            type="text"
                            name="lastname"
                            id="lastname"
                            class="form-control"
                        />
                        <label for="lastname">Apellido</label>
                    </div>
                    <div class="form-group">
                        <input
                            v-model="teacher.asignatura"
                            type="text"
                            name="asignatura"
                            id="asignatura"
                            class="form-control"
                        />
                        <label for="asignatura">Asignatura</label>
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
                <div v-if="teachers.length == 0" class="text-warning">
                    Sin registros
                </div>
                <table v-else class="table-responsive">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Asignatura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="s in teachers" :key="s.idperson">
                            <td>{{ s.ci }}</td>
                            <td>{{ s.name }} {{ s.lastname }}</td>
                            <td>{{ s.asignatura }}</td>
                            <td>
                                <span
                                    ><span
                                        class="text-warning"
                                        @click="selectEdit(s.idteacher)"
                                        >Edit</span
                                    >
                                    |
                                    <span
                                        class="text-black-50"
                                        @click="destroy(s.idteacher)"
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
            teacher: {
                ci: "",
                asignatura: "",
                name: "",
                lastname: ""
            },
            teachers: [],
            isEdit: false
        };
    },
    methods: {
        add() {
            console.log(this.teacher);
            axios
                .post("/api/teachers/create", this.teacher)
                .then(newuser => {
                    console.log(newuser);
                    this.getAll();
                    this.teacher = {
                        ci: "",
                        asignatura: "",
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
            this.teachers = [];
            axios
                .get("/api/teachers")
                .then(({ data }) => {
                    this.teachers = data;
                    console.log(this.teachers);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        edit() {
            axios
                .put("/api/teachers/edit", this.teacher)
                .then(({ data }) => {
                    this.getAll();
                    alert("Usuario editado!");
                    console.log(data);
                    this.teacher = {
                        ci: "",
                        asignatura: "",
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
                .delete(`/api/teachers/delete/${id}`)
                .then(data => {
                    this.getAll();
                    alert("Docente eliminado");
                    console.log("delete", data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        selectEdit(id) {
            axios
                .get(`/api/teachers/${id}`)
                .then(({ data }) => {
                    console.log("Data", data);
                    this.isEdit = true;
                    this.teacher.ci = data.ci;
                    this.teacher.name = data.name;
                    this.teacher.lastname = data.lastname;
                    this.teacher.idteacher = data.idteacher;
                    this.teacher.asignatura = data.asignatura;
                    console.log(this.teacher);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        clean() {
            this.isEdit = false
            this.teacher = {
                ci: "",
                asignatura: "",
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
