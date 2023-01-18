<template>
    <div>
        <header class="p-3 bg-primary text-white mb-5">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Capstone</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <div class="d-flex align-items-center">
                            <form class="w-100 me-3">
                                <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                            </form>

                            <div class="flex-shrink-0 dropdown">
                                <a href="#" class="
                    d-block
                    link-dark
                    text-decoration-none
                    dropdown-toggle
                    show
                  " id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="true">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                                        class="rounded-circle" />
                                    <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-person-badge text-white"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                    <path
                      d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"
                    />
                  </svg> -->
                                </a>
                                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2"
                                    data-popper-placement="bottom-end" style="
                    position: absolute;
                    inset: 0px auto auto 0px;
                    margin: 0px;
                    transform: translate(-110px, 34px);
                  ">
                                    <li>
                                        <a class="dropdown-item" href="#">My Bookmarks</a>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0)" @click="signOut">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <router-view class="container" />
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const signOut = () => {
    router.push('/login')
}
</script>

<style>
footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
}
</style>