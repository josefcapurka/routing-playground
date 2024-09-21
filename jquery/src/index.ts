import { Router } from 'silkrouter';

// https://stackoverflow.com/questions/50943704/whats-the-purpose-of-object-definepropertyexports-esmodule-value-0
const router = new Router({
    hashRouting: true,
});

router.subscribe((e: any) => {
    console.log('Došlo ke změně cesty:');
});
