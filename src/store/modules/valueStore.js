import axios from "axios"

const value = {
    namespaced: true,
    state: {
        username: '',
        password: ''
    },
    getters: {},
    mutations: {
        LOGIN(state, payload) {
            console.log(state, payload);
            state.username = payload.username;
            state.password = payload.password;
        }
    },
    actions: {
        async login(context, value) {
            await axios
                .post("https://reqres.in/api/login", {
                    email: "eve.holt@reqres.in",
                    password: "cityslicka",
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((res) => {
                    console.error(res);
                });
            context.commit('LOGIN', value);
        }
    },
}

export default value