<template>
    <div id="docente">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3>Publica un foro</h3>
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
                        <div class="form-group">
                            <button
                                class="btn waves-effect waves-light"
                                @click="searchTeacher"
                            >
                                Buscar
                            </button>
                        </div>
                        <select
                            v-model="classroom.data"
                            class="form-control form-control-lg"
                            @change="selected"
                        >
                            <option value="0" disabled
                                >Selecciona el curso</option
                            >
                            <option
                                v-for="c in teacherCourses"
                                :key="c.id"
                                :value="c.id"
                            >
                                {{ c.name }}
                            </option>
                        </select>
                        <div v-if="exist" class="form-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                class="form-control"
                                v-model="nameForo"
                            />
                            <label for="">Nombre del foro</label>
                        </div>
                        <div class="form-group">
                            <button
                                @click="add"
                                class="btn waves-effect waves-light"
                            >
                                Agregar foro
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>Foros abiertos</h3>
                    <table>
                        <tbody>
                            <tr v-for="f in foros" :key="f.idforum">
                                <td>{{ f.forum.name }}</td>
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
export default {
    data() {
        return {
            courses: [],
            classroom: {
                data: ""
            },
            ci: "",
            teacherCourses: [],
            nameForo: "",
            exist: false,
            foros: []
        };
    },
    methods: {
        add() {
            axios
                .post("/api/forum/create", {
                    name: this.nameForo,
                    classrooms_courses_idcourse: this.classroom.data
                })
                .then(data => {
                    this.ci = "";
                    this.teacherCourses = [];
                    this.nameForo = "";
                    alert("Foro agregado");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        searchTeacher() {
            this.teacherCourses = this.courses.filter(
                c => c.teacher.ci == this.ci
            );
        },
        selected(e) {
            this.nameForo = "";
            this.exist = true;
        },
        getCourses() {
            axios
                .get("/api/courses")
                .then(({ data }) => {
                    this.courses = data;
                })
                .catch(() => {
                    console.log("courses not found!");
                });
        },
        getall() {
            axios
                .get("/api/forum")
                .then(({ data }) => {
                    this.foros = data;
                    console.log(data);
                    console.log("Foror", this.foros);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.getCourses();
        this.getall();
    }
};
</script>
