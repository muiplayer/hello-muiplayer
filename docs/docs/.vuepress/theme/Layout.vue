<template>
    <ParentLayout>
        <template #sidebar-top>
            <ClientOnly><Ads-SidebarTop></Ads-SidebarTop></ClientOnly>
        </template>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
// import CarbonAds from '@theme/components/CarbonAds.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout,
  }
}
</script>
