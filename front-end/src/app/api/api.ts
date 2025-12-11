// front-end/src/app/admin/api.ts
export async function getUsuarios() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL ?? ''}/api/usuarios`, {
    // se for chamado em Client Component, pode ser apenas '/api/usuarios'
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Erro ao buscar usuários');
  return res.json();
}

export async function getUsuario(id: string) {
  const res = await fetch(`/api/usuarios/${id}`, { credentials: 'include' });
  if (!res.ok) throw new Error('Erro ao buscar usuário');
  return res.json();
}

export async function updateUsuario(id: string, data: HTMLFormElement) {
  const res = await fetch(`/api/usuarios/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erro ao atualizar usuário');
  return res.json();
}

export async function deleteUsuario(id: string) {
  const res = await fetch(`/api/usuarios/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Erro ao deletar usuário');
  return res.json();
}
