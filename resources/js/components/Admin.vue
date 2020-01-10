<template>
    <div>
        <nav style="box-shadow:none" class="mb-3  blue-grey darken-4 d-flex justify-content-center">
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><a :class="{active: isTeacher}" @click="changeToTeacher">DOCENTE</a></li>
                    <li class="tab">
                        <a :class="{active: isStudent}" @click="changeToStudent">ESTUDIANTE</a>
                    </li>
                    <li class="tab">
                        <a :class="{active: isCourse}" @click="changeToCourse">CURSOS</a>
                    </li>
                    <li class="tab">
                        <a :class="{active: isClass}" @click="changeToClass">INSCRIPCION</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="admin" class="container">
            <div class="row">
                <div class="col-md-12" v-if="isStudent"><AddStudent /></div>
                <div class="col-md-12" v-if="isTeacher"><AddTeacher /></div>
                <div class="col-md-12" v-if="isCourse"><AddCourse /></div>
                <div class="col-md-12" v-if="isClass"><AddClass /></div>
            </div>
            <div
                class="row"
                v-if="!isStudent & !isTeacher & !isCourse & !isClass"
            >
                <div class="offset-md-3 col-md-6 text-center">
                    <div class="display-1 mt-5">Bienvenido</div>
                    <div class="display-4">a</div>
                    <div class="display-1">Forum ! </div>
                    <p>Gestiona y administrar los recursos de Forum !</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AddStudent from "./AddStudent";
import AddTeacher from "./AddTeacher";
import AddCourse from "./AddCourse";
import AddClass from "./AddClass";
export default {
    data() {
        return {
            isTeacher: false,
            isStudent: false,
            isCourse: false,
            isClass: false
        };
    },
    components: {
        AddStudent,
        AddTeacher,
        AddCourse,
        AddClass
    },
    methods: {
        changeToTeacher() {
            this.isTeacher = !this.isTeacher;
            this.isStudent = false;
            this.isCourse = false;
            this.isClass = false;
        },
        changeToStudent() {
            this.isStudent = !this.isStudent;
            this.isTeacher = false;
            this.isCourse = false;
            this.isClass = false;
        },
        changeToCourse() {
            this.isCourse = !this.isCourse;
            this.isTeacher = false;
            this.isStudent = false;
            this.isClass = false;
        },
        changeToClass() {
            this.isClass = !this.isClass;
            this.isCourse = false;
            this.isTeacher = false;
            this.isStudent = false;
        }
    }
};
</script>
