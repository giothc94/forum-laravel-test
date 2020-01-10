<template>
    <nav class="nav-extended  blue-grey darken-4">
        <div class="nav-wrapper">
            <a class="brand-logo ml-4">Forum</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <router-link to="/inicio">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/docente">Docente</router-link>
                </li>
                <li>
                    <router-link to="/admin">Admin</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Header"
};
</script>
