import { authReducer, types } from "../../../src/auth/";

describe("Pruebas en authReducer", () => {
  test("Debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe (al hacer login) llamar el login autenticar y establecer el user con sus datos", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Aldhair",
        id: "123",
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Debe (al hacer logout) borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "Aldhair" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      logged: false,
    });
  });
});
