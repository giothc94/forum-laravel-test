<template>
    <div>
        <div class="card p-4 shadow">
            <h3>Matricular estudiantes</h3>
            <div class="row m-0">
                <div class="col-md-12">
                    <div id="form-classroom">
                        <div class="form-group"></div>
                        <select
                            v-model="classroom.data"
                            class="form-control form-control-lg"
                            @change="selected"
                        >
                            <option value="0" disabled
                                >Selecciona el curso</option
                            >
                            <option
                                v-for="c in courses"
                                :key="c.id"
                                :value="
                                    JSON.stringify({
                                        idteacher: c.teacher.idteacher,
                                        idcourse: c.id
                                    })
                                "
                                >{{ c.name }}</option
                            >
                        </select>
                        <label>Selecciona el curso</label>
                    </div>
                    <div
                        class="form-group d-flex justify-content-between"
                        v-if="teacher"
                    >
                        <div class="w-50">
                            <h6>{{ teacher.name }} {{ teacher.lastname }}</h6>
                            <label>Docente</label>
                        </div>
                        <div class="w-50">
                            <h6>{{ course.name }}</h6>
                            <label>Curso</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label for="exampleFormControlSelect2"
                        >Seleccione los estudiantes a matricular</label
                    >
                    <select
                        multiple
                        class="form-control"
                        id="exampleFormControlSelect2"
                        v-model="studentsSelected"
                    >
                        <option
                            v-for="s in students"
                            :key="s.idstudent"
                            :value="s"
                        >
                            {{ s.ci }} - {{ s.name }} {{ s.lastname }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn waves-effect waves-light" @click="add">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
        <div class="card p-4 shadow" v-if="studentList.length > 0">
            <h3>Lista de estudiantes</h3>
            <table>
                <thead>
                    <tr>
                        <th>CI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="e in studentList" :key="e.r">
                        <td>{{ e.ci }}</td>
                        <td>{{ e.name }}</td>
                        <td>{{ e.lastname }}</td>
                        <td>{{ e.course.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            classroom: {
                data: ""
            },
            teachers: [],
            students: [],
            studentsSelected: [],
            courses: [],
            teacher: null,
            course: null,
            studentList: []
        };
    },
    methods: {
        add() {
            let postData = {
                students: this.studentsSelected,
                idcourse: this.classroom.data.idcourse,
                idteacher: this.classroom.data.idteacher
            };
            axios
                .post("/api/classrooms/create", postData)
                .then(() => {
                    classroom: {
                        data: "";
                    }
                    this.teacher = null;
                    this.students = [];
                    this.getStudentListCourse();
                    alert("Estudiante matriculado.");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        selected(e) {
            this.classroom.data = JSON.parse(e.target.value);
            this.course = this.courses.find(
                c => c.id == this.classroom.data.idcourse
            );
            console.log("course", this.course);
            axios
                .get(`/api/teachers/${this.classroom.data.idteacher}`)
                .then(({ data }) => {
                    console.log(data);
                    this.teacher = data;
                    return axios.post("/api/classrooms/find", {
                        idcourse: this.classroom.data.idcourse
                    });
                })
                .then(({ data }) => {
                    let students = data.map(classroom => {
                        return classroom.students_idstudent;
                    });
                    this.getStudentsExcept(students);
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
                })
                .catch(() => {
                    console.log("teachers not found!");
                });
        },
        getStudentsExcept(students) {
            axios
                .post("/api/students/except", { students: students })
                .then(({ data }) => {
                    this.students = data;
                })
                .catch(err => {
                    console.log(err);
                });
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
        getStudentListCourse() {
            axios
                .get("/api/classrooms")
                .then(({ data }) => {
                    console.log(data);
                    let idCourses = [
                        ...new Set(data.map(c => c.courses_idcourse))
                    ];
                    let studentsWithCourse = data.map(async c => {
                        let { data } = await axios.get(
                            `/api/students/${c.students_idstudent}`
                        );
                        data.course = this.courses.filter(
                            cf => cf.id == c.courses_idcourse
                        )[0];
                        console.log("map", data);
                        return data;
                    });
                    studentsWithCourse = Promise.all(studentsWithCourse);
                    studentsWithCourse.then(d => {
                        this.studentList = d;
                        console.log(d);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.getTeachers();
        this.getCourses();
        this.getStudentListCourse();
    }
};
</script>
