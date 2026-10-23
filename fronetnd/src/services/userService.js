const API_URL = import.meta.env.VITE_API_URL;

export async function getUsers() {
  const res = await fetch(`${API_URL}/api/acc/user`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  return data.data;
}

export async function getUserById(id) {
  const res = await fetch(`${API_URL}/api/acc/user/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await res.json();
  return data.GetUserDataID;
}

export async function createUser(data) {
  const res = await fetch(`${API_URL}/api/acc/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create user");
  }

  const result = await res.json();
  return result.userinsertingData[0];
}

export async function updateUser(id, data) {
  const res = await fetch(`${API_URL}/api/acc/user/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update user");
  }

  const result = await res.json();
  return result.updatingData[0];
}

export async function deleteUser(id) {
  const res = await fetch(`${API_URL}/api/acc/user/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete user");
  }

  return res.json();
}