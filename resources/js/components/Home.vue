<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card p-4">
                    <div class="form-group">
                        <input
                            type="number"
                            name="name"
                            id="name"
                            class="form-control"
                            v-model="ci"
                        />
                        <label for="">Ingresa tu ci</label>
                    </div>
                    <div class="form-group" v-if="me">
                        <label for="" v-bind="me">
                            {{ me.name }} {{ me.lastname }}
                        </label>
                    </div>
                    <div class="form-group">
                        <button
                            class="btn waves-effect waves-light"
                            @click="searchStudent"
                        >
                            Buscar
                        </button>
                    </div>
                    <select
                        v-model="classroom.id"
                        class="form-control form-control-lg"
                        @change="selected"
                    >
                        <option value="0" disabled>Selecciona el curso</option>
                        <option
                            v-for="c in getcourse"
                            :key="c.id"
                            :value="c.id"
                        >
                            {{ c.name }}
                        </option>
                    </select>
                    <br />
                    <select
                        v-if="existcourse && forums.length > 0"
                        class="form-control form-control-lg"
                        @change="selectedForum"
                        v-model="forum"
                    >
                        <option value="0" disabled>Selecciona el foro</option>
                        <option v-for="c in forums" :key="c.id" :value="c.id">
                            {{ c.name }}
                        </option>
                    </select>
                    <div v-if="existforum" class="form-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            v-model="intervencion"
                        />
                        <label for="">Ingresa tu participacion</label>
                    </div>
                    <div class="form-group">
                        <button
                            v-if="existforum"
                            @click="add"
                            class="btn waves-effect waves-light"
                        >
                            Agregar foro
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card p-4">
                    <table>
                        <thead>
                            <tr>
                                <th>Foro</th>
                                <th>Intervencion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="p in participations" :key="p.idparticipacion">
                                <td>{{p.forum.name}}</td>
                                <td>{{p.participation}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { log } from "util";
export default {
    data() {
        return {
            ci: "",
            studentCourses: [],
            intervencion: "",
            existcourse: false,
            existforum: false,
            classroom: {
                id: ""
            },
            classStudent: [],
            courses: [],
            me: null,
            forums: [],
            forum: "",
            participations:[]
        };
    },
    computed: {
        getcourse() {
            return this.studentCourses;
        }
    },
    methods: {
        add() {
            let q = {
                participation: this.intervencion,
                students_idstudent: this.me.idstudent,
                forums_idforum: this.forum
            };
            console.log("QUERY", q);
            axios
                .post("/api/participation/find", q)
                .then(({ data }) => {
                    console.log(data);
                    this.ci = "";
                    this.me = null;
                    this.classroom = {
                        id: ""
                    };
                    this.existforum = false;
                    this.existcourse = false;
                    alert("Tu participacion fue regiistrada !");
                    this.getCourses();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        searchStudent() {
            let student = this.classStudent.filter(
                c => c.student.ci == this.ci
            );
            this.me = student[0].student;
            this.studentCourses = student.map(c => {
                return this.courses.filter(
                    cr => cr.id == c.courses_idcourse
                )[0];
            });
            console.log("me", this.me);
            console.log("me", this.studentCourses);
        },
        selected(e) {
            console.log(e.target.value);
            axios
                .post("/api/forum/find", { idcourse: e.target.value })
                .then(({ data }) => {
                    this.forums = data;
                })
                .catch(err => {
                    console.log(err);
                });
            this.existcourse = true;
        },
        selectedForum(e) {
            this.existforum = true;
        },
        getCourses() {
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
        get() {
            axios
                .get("/api/forum")
                .then(({ data }) => {
                    console.log("Forum", data);
                    this.participations = data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        axios
            .get("/api/classrooms/student")
            .then(({ data }) => {
                this.classStudent = data;
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        this.get();
        this.getCourses();
    }
};
</script>
