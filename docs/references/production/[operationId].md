---
aside: false
outline: false
title: Production
---

<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()

const operationId = route.data.params.operationId
</script>

<OAOperation spec-url="https://api.foxochat.app/v3/api-docs" :operationId="operationId" />
