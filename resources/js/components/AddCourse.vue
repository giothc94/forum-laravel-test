<template>
    <div class="card p-4 shadow">
        <h3>Agregar Curso</h3>
        <div class="row m-0">
            <div class="col-md-6">
                <div id="form-course">
                    <div class="form-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            v-model="course.name"
                        />
                        <label for="">Nombre</label>
                    </div>
                    <div class="form-group">
                        <select
                            v-model="course.idteacher"
                            class="form-control form-control-lg"
                        >
                            <option value="0" disabled
                                >Selecciona el docente para este curso</option
                            >
                            <option
                                v-for="t in teachers"
                                :key="t.idteacher"
                                :value="t.idteacher"
                                >{{ t.name }} {{ t.lastname }}</option
                            >
                        </select>
                        <label>Docente</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <table class="table-responsive">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Docente</th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in courses" :key="c.id">
                            <td>{{ c.id }}</td>
                            <td>{{ c.name }}</td>
                            <td>
                                {{ c.teacher.name }} {{ c.teacher.lastname }}
                            </td>
                            <td>
                                |<span
                                    class="text-danger"
                                    @click="destroy({id: c.id,idteacher: c.teacher.idteacher})"
                                    >Eliminar</span
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="form-group">
                    <button class="btn waves-effect waves-light" @click="add">
                        Guardar
                    </button>
                </div>
        </div>
    </div>
</template>
<script>
import M from "materialize-css";
import axios from "axios";
import $ from "jquery";
export default {
    data() {
        return {
            teachers: [],
            course: {
                name: "",
                idteacher: null
            },
            courses: [],
            students: []
        };
    },
    mounted() {
        this.getTeachers();
        this.getAll();
        this.getStudents();
    },
    methods: {
        getStudents() {
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
        getTeachers() {
            axios
                .get("/api/teachers")
                .then(({ data }) => {
                    this.teachers = data;
                    console.log(this.teachers);
                })
                .catch(() => {
                    console.log("teachers not found!");
                });
        },
        add() {
            axios
                .post("/api/courses/create", this.course)
                .then(({ data }) => {
                    this.getAll();
                    alert("Curso agregado!");
                    this.course = {
                        name: "",
                        idteacher: null
                    };
                })
                .catch(err => {
                    console.log(err);
                });
            console.log(this.course);
        },
        getAll() {
            axios
                .get("/api/courses")
                .then(({ data }) => {
                    console.log("Cursos", data);
                    this.courses = data;
                })
                .catch(() => {
                    console.log("courses not found!");
                });
        },
        destroy(data) {
            axios
                .post(`/api/courses/delete/`, data)
                .then(data => {
                    this.getAll();
                    alert("Curso eliminado!");
                    console.log(data);
                })
                .catch(err => {
                    console.log("course not found!", err);
                });
        }
    }
};
</script>
