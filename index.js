import { AsyncStorage } from 'react-native'

let getState = async () => {
    let savedState = await AsyncStorage.getItem('state')
    if (savedState) {
        return JSON.parse(savedState)
    }

    return {}
}

let saveState = (state) => {
    return AsyncStorage.setItem('state', JSON.stringify(state))
}

class Storage {
    cache = {}

    init = new Promise(async (resolve, reject) => {
        this.cache = await getState()
        resolve()
    })

    get (property) {
        return this.cache[property]
    }

    async set (property, value) {
        if (this.cache[property] === value) return

        this.cache[property] = value

        await saveState(this.cache)

        return true
    }

    async remove (property) {
        delete this.cache[property]

        await saveState(this.cache)

        return true
    }
}

export default new Storage()
