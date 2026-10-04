<template>
    <section class="m-auto w-3/4">
        <h1 class="text-5xl font-bold m-0">
            — flagrant·es
        </h1>
        <h2 class="text-3xl font-semibold m-0 text-red-600">
            du métal engagé
        </h2>
        <p>L'association flagrant·es travaille à la promotion de groupes de métal <u>engagés</u>, et (idéalement) avec un
            line-up qui n'est <u>pas
                exclusivement masculin</u>.</p>
    </section>
    <section>
        <h3 class="m-auto w-3/4 text-3xl font-semibold mt-10 mb-5">
            nos groupes
        </h3>

        <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 lg:m-4">
            <article v-for="band in frontmatter.bands" :key="band.name" class="flex flex-col gap-4 p-5" :class="band.color">
                <header>
                    <h4 class="uppercase text-6xl m-0 mt-3 flex items-center">
                        <span class=" text-sm">✦</span> {{ band.name }}
                    </h4>
                    <h5 class="text-xl m-0 mb-3 font-light">{{ band.description }}</h5>
                </header>

                <div v-for="video in band.videos" :key="video.link"
                    class="min-h-75 border-4 border-white border-solid rounded">
                    <iframe width="100%" class="h-full" :src="`https://www.youtube.com/embed/${video.link}`"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div class="flex flex-col gap-1 *:m-0">
                    <p v-if="band.why">
                    <div class="h-[1.2rem] overflow-hidden text-black">
                        <b class="text-2xl">on adore.</b>
                    </div>
                    {{ band.why }}
                    </p>
                    <p v-if="band.recent">
                    <div class="h-[1.2rem] overflow-hidden text-black">
                        <b class="text-2xl">actu.</b>
                    </div>
                    {{ band.recent }}
                    </p>
                    <p v-if="band.other_bands">
                    <div class="h-[1.2rem] overflow-hidden text-black">
                        <b class="text-2xl">vibe.</b>
                    </div>
                    {{ band.other_bands }}
                    </p>
                    <p v-if="band.notes" class="italic text-sm">
                        <b class="underline">note:</b> {{ band.notes }}
                    </p>
                </div>

                <footer class="flex flex-col gap-1 *:m-0 text-right">
                    <div class="h-[1.2rem] overflow-hidden text-black">
                        <b class="text-2xl">liens.</b>
                    </div>
                    <p v-for="link in band.links" class="text-white">
                        <a :href="link.url" target="_blank">
                            <span class="opacity-50">{{ link.url }}</span><b class="underline">{{ link.name }}.</b>
                        </a>
                    </p>
                </footer>
            </article>

        </div>
    </section>
    <section class="m-auto w-3/4 my-6 pb-6">
        <p>Contactez-nous : <a href="mailto:flagrantes-live@proton.me">flagrantes-live@proton.me</a></p>
        <p>Via Instagram : <a href="https://www.instagram.com/flagrant.es/" target="_blank">@flagrant.es</a></p>
    </section>
</template>
<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>