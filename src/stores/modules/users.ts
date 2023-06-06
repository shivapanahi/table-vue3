import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";


export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
}
export interface Pagination {
    current_page: number;
    per_page: number;
    total: number;
    pages: number;
}
export interface SearchForm {
    page?: number;
    name?: string;
    family?: string;
    gender?: number;
    limit?:number;
    age?:number;
    id?:number;
    active:boolean;
  }
export const useUserStore = defineStore("user", () => {
    const users = ref<User[]>([]);
    const usersPagination = ref<Pagination>({} as Pagination);
    function setUsers(payload: any) {
        users.value = payload;
    }
    function setUsersPagination(payload: any) {
        usersPagination.value = {
            current_page: payload["offset"],
            per_page: payload["limit"],
            total: payload["total_users"],
            pages: payload["total_users"]/payload["limit"],
        };
    }
    function fetchUsers(params: any) {
        return new Promise<void>((resolve, reject) => {
            axios.get('https://api.slingacademy.com/v1/sample-data/users', {
                params: {
                    limit:50,
                    offset:params.page,
                    name:params.name,
                    gender:params.gender,
                    id:params.id,
                    active:params.active,
                    age:params.age,                    
                    family:params.family
                }
            })
                .then((response) => {
                    setUsers(response.data.users)
                    setUsersPagination(response.data)
                })
        });
    }
    return {
        users,
        usersPagination,
        setUsersPagination,
        fetchUsers
    };
});
