<template>
    <div class="flex justify-between w-full">
        <div class="w-[30%] lg:w-[15%] flex flex-row">
            SideBar
            <NuxtLink to="/" class="p-1">
                <img src="~/assets/logo.png">
            </NuxtLink>
        </div>
        <div class="hidden lg:flex flex-row items-end">
            <NuxtLink to="/kqm-standards" class="text-white p-3">
                KQM Standards
            </NuxtLink>
            <NuxtLink to="/about" class="text-white p-3">
                About
            </NuxtLink>
        </div>
    </div>
</template>
