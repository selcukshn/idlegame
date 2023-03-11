import { createStore } from 'vuex'

const store = createStore({
    state: {
        resource: 0,
        manuelCollect: 1,
        autoCollect: 0,
        upgradeItems: [
            { id: 1, title: 'Tıklama gücü +1', type: 'manuel', increasement: 1, price: 25, level: 0 },
            { id: 2, title: 'Her saniye +1 altın', type: 'auto', increasement: 1, price: 250, level: 0 },
            { id: 3, title: 'Tıklama gücü +25', type: 'manuel', increasement: 25, price: 2500, level: 0 },
            { id: 4, title: 'Her saniye +25 altın', type: 'auto', increasement: 25, price: 10000, level: 0 },
            { id: 5, title: 'Tıklama gücü +250', type: 'manuel', increasement: 250, price: 50000, level: 0 },
            { id: 6, title: 'Her saniye +250 altın', type: 'auto', increasement: 250, price: 250000, level: 0 },
            { id: 7, title: 'Tıklama gücü +1000', type: 'manuel', increasement: 1000, price: 500000, level: 0 },
            { id: 8, title: 'Her saniye +1000 altın', type: 'auto', increasement: 1000, price: 1000000, level: 0 },
            { id: 9, title: 'Tıklama gücü +5000', type: 'auto', increasement: 1000, price: 2500000, level: 0 },
            { id: 10, title: 'Her saniye +5000 altın', type: 'auto', increasement: 1000, price: 5000000, level: 0 },
        ]
    },
    getters: {
        getResource: state => state.resource.toFixed(0),
        getManuelCollect: state => state.manuelCollect,
        getAutoCollect: state => state.autoCollect,
        getUpgradeItems: state => state.upgradeItems
    },
    mutations: {
        addResource(state, count) {
            state.resource += count
        },
        increaseCollect(state, upgradeItem) {
            if (upgradeItem.type === 'manuel')
                state.manuelCollect += upgradeItem.increasement;
            else
                state.autoCollect += upgradeItem.increasement;
            state.upgradeItems.find(x => x.id === upgradeItem.id).level += 1
            state.resource -= upgradeItem.price
        }
    }
})

export default store;