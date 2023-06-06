<template>
  <div class="container mx-auto">
    <div class="card">
      <div class="card-header border-0 pt-6">
        <div class="card-title">
          <div class="d-flex align-items-center position-relative my-1">
            <!-------start search --------->
            <div class="grid grid-cols-3 gap-4">
              <div class="">
                <input type="text" v-model="search.name"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="name" />
              </div>
              <div class="">
                <input type="text" v-model="search.family"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="family" />
              </div>
              <div class="">
                <input type="number" v-model="search.age"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="age" />
              </div>
              <div class="">
                <input type="number" v-model="search.id"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="id" />
              </div>
              <div class="">
                <div class="relative h-10 w-72 min-w-[200px]">
                  <select v-model="search.gender"
                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option v-for="option in genderOptions" :key="option?.name" :value="option?.value">{{ option.name }}
                    </option>
                  </select>
                  <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Select a gender
                  </label>
                </div>
              </div>
              <div class="">

                <div class="flex items-center mb-4">
                  <input id="default-radio-1" type="radio" :value="true" v-model="search.active"  name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">active
                    </label>
                </div>
                <div class="flex items-center">
                  <input checked id="default-radio-2" type="radio" :value="false" v-model="search.active" name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    deactive</label>
                </div>
              </div>
              <div class="...">
                <button
                  class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true" @click="getUsers()">search
                </button>
              </div>
            </div>
            <!-------end search --------->
          </div>
        </div>
      </div>
      <!----------- start table ------------>
      <div>
        <div class="table-responsive">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">نام</th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">نام خانوادگی</th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">ایمیل</th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">تلفن</th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">جنسیت</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td class="px-6 py-4">{{ user.first_name }}</td>
                <td class="px-6 py-4">{{ user.last_name }}</td>
                <td class="px-6 py-4">{{ user.email }}</td>
                <td class="px-6 py-4">{{ user.phone }}</td>
                <td class="px-6 py-4">{{ user.gender }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination :pagination="usersPagination" @update="handleCurrentChange" />
      </div>
      <!----------- end table ------------>
    </div>
  </div>
</template>

<script lang="ts">
import Pagination from '@/components/Pagination.vue';
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore, SearchForm } from "../stores/modules/users";
import {
  gender
} from "../stores/utils";

export default defineComponent({
  name: 'HomeView',
  components: {
    Pagination
  },
  setup() {
    const store = useUserStore();
    const router = useRouter();
    const route = useRoute()
    const loading = ref(false);
    const cloneJSON = (dat: any) => JSON.parse(JSON.stringify(dat))
    const pickByKeys = (data: SearchForm, keys: Array<keyof SearchForm>) => {
      return cloneJSON(Object.fromEntries(keys.map(key => [
        key, data[key] as string
      ])))
    }
    const search = ref<SearchForm>(pickByKeys(route.query as SearchForm, ['name', 'page', 'gender', 'limit','id','active']));
    const users = computed(() => {
      return store.users;
    });
    const usersPagination = computed(() => {
      return store.usersPagination;
    });
    const genderOptions = computed(() => {
      return gender
    });
    const getUsers = () => {
      loading.value = true;

      router.push({
        path: route.fullPath,
        query: pickByKeys(search.value, ['page', 'name', 'gender', 'limit','id','active'])
      });
      store
        .fetchUsers(search.value)
        .finally(() => loading.value = false);
    };

    const handleCurrentChange = (page: number) => {
      search.value.page = page;
      getUsers();
    };
    onMounted(() => {
      getUsers();
    });
    return {
      users,
      search,
      loading,
      usersPagination,
      handleCurrentChange,
      getUsers,
      genderOptions
    };
  }
});
</script>
