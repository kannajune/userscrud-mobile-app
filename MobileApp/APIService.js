import React, { Component } from "react";

export default class ApiService {
  constructor() {
    this.baseURL = "http://localhost:3000/";
    this.fetch = this.fetch.bind(this);
  }

  getAllUsers() {
    return this.fetch(`http://localhost:3000/users/index`, {
      method: "GET",
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  createUser(user) {
    return this.fetch(`http://localhost:3000/users/create`, {
      method: "POST",
      body: JSON.stringify(user),
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  putUser(user) {
    return this.fetch(`http://localhost:3000/users/update`, {
      method: "POST",
      body: JSON.stringify(user),
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  getUserById(getId) {
    return this.fetch(`http://localhost:3000/users/view/${getId}`, {
      method: "GET",
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  deleteUserById(getId) {
    return this.fetch(`http://localhost:3000/users/delete/${getId}`, {
      method: "DELETE",
    }).then((res) => {
      return Promise.resolve(res);
    });
  }

  fetch(url, options) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";
    headers["Access-Control-Allow-Origin"] = "*";

    return fetch(url, {
      headers,
      crossDomain: true,
      ...options,
    })
      .then(this.processResponse)
      .then((response) => {
        return response.data;
      })
      .catch((response) => {
        if (response.status === 400) {
          throw response;
        }
      });
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      let func;
      response.status < 400 ? (func = resolve) : (func = reject);
      if (response.status === 204) {
        response.then((data) =>
          func({ status: response.status, data: { status: "success" } })
        );
      } else if (response.status === 401) {
        window.location.href = "./";
      } else {
        response
          .json()
          .then((data) => func({ status: response.status, data: data }));
      }
    });
  }
}
