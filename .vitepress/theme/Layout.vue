<template>
    <section class="m-auto w-3/4">
        <h1 class="text-5xl font-bold m-0">
            — flagrant·es
        </h1>
        <h2 class="text-3xl font-semibold m-0 text-red-600">
            du métal engagé
        </h2>
        <p>L'association flagrant·es travaille à la promotion de groupes de métal engagés, et avec un line-up qui n'est pas
            exclusivement masculin.</p>
    </section>
    <section>
        <h3 class="m-auto w-3/4 text-3xl font-semibold mt-10 mb-5">
            nos groupes
        </h3>

        <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
            <article v-for="band in frontmatter.bands" :key="band.name"
                class="flex flex-col gap-4 p-5" :class="band.color">
                <header>
                    <h4 class="uppercase text-6xl m-0 mt-3 flex items-center">
                        <span class=" text-sm">✦</span> {{ band.name }}
                    </h4>
                    <h5 class="text-xl m-0 mb-3 font-light">{{ band.description }}</h5>
                </header>

                <iframe v-for="video in band.videos" :key="video.link" width="80%" class="min-h-75"
                    :src="`https://www.youtube.com/embed/${video.link}`" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <div class="flex flex-col gap-1 *:m-0">
                    <p v-if="band.why">
                        <b class="underline">on adore.</b> {{ band.why }}
                    </p>
                    <p v-if="band.recent">
                        <b class="underline">actu.</b> {{ band.recent }}
                    </p>
                    <p v-if="band.other_bands">
                        <b class="underline">vibe.</b> {{ band.other_bands }}
                    </p>
                </div>

                <footer>
                    <a
                    v-for="links in band.links"
                    :href="links.instagram"
                    target="_blank"
                    class="text-white"
                    >
                        <b class="underline">insta.</b> {{ links.instagram }}
                    </a>
                </footer>
            </article>

        </div>
    </section>
    <section class="m-auto w-3/4 my-6 pb-6">
        <p>Contactez-nous : <a href="mailto:flagrantes-live@proton.me">flagrantes-live@proton.me</a></p>
        <p>Via Instagram : <a href="https://www.instagram.com/ms.cendres/" target="_blank">@ms.cendres</a></p>
    </section>
</template>
<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>