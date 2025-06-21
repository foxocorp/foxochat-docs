export default {
    async paths() {
        const spec = await (await fetch('https://api-dev.foxochat.app/v3/api-docs')).json();

        return Object.values(spec.paths).flatMap(pathItem => {
            return Object.values(pathItem).flatMap(operation => {
                return {
                    params: {
                        operationId: operation.operationId,
                    },
                };
            });
        });
    },
};
