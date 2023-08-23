import { reactive } from 'vue'

export const store = reactive({
  isHidden: true,
  toggleIsHidden() {
    this.isHidden = !this.isHidden
  },
  currentUser: {
    id: '',
    name: '',
    username: '',
    email: '',
    role: ''
  },
  selectedUser: {
    id: '',
    name: '',
    username: '',
    email: '',
    role: 'user'
  },
  clearUser() {
    this.currentUser.id = ''
    this.currentUser.name = ''
    this.currentUser.username = ''
    this.currentUser.email = ''
    this.currentUser.role = ''
  },
  clearSelectedUser() {
    this.selectedUser.id = ''
    this.selectedUser.name = ''
    this.selectedUser.username = ''
    this.selectedUser.email = ''
    this.selectedUser.role = 'user'
  },
  setDataSelectedUser(user) {
    this.selectedUser.id = user.id
    this.selectedUser.name = user.name
    this.selectedUser.username = user.username
    this.selectedUser.email = user.email
    this.selectedUser.role = user.role
  },
  modalActive: false,
  modalType: '',
  toggleModal() {
    this.modalActive = !this.modalActive
  }
})
