export enum UserRoles {
  NOT_SPECIFIED = 0,
  ADMINISTRATOR = 1,
  CUSTOMER = 2,
}
export interface IUserCredential {
  userName: string;
  password: string;
}

export interface IUser extends IUserCredential {
  firstName: string;
  lastName: string;
  role: UserRoles;
}

export const DefUser: IUser = {
  userName: "",
  password: "",
  firstName: "",
  lastName: "",
  role: UserRoles.NOT_SPECIFIED,
};
export const DefCredential: IUserCredential = {
  userName: "",
  password: "",
};

const adminUser: IUser = {
  userName: "Mario",
  password: "rossi",
  firstName: "Mario",
  lastName: "Rossi",
  role: UserRoles.ADMINISTRATOR,
};

const customerUser: IUser = {
  userName: "Carla",
  password: "bianchi",
  firstName: "Carla",
  lastName: "Bianch",
  role: UserRoles.CUSTOMER,
};

export const UserList: IUser[] =
[
    adminUser,
    customerUser,
]
