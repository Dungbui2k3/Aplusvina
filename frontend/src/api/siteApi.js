const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

export function fetchSiteContent() {
  return request('/content');
}

export function updateDoorMenu(submenu) {
  return request('/admin/door-menu', {
    method: 'PUT',
    body: JSON.stringify({ submenu }),
  });
}

export function saveDoorProduct(type, product) {
  return request(`/admin/door-systems/${type}/products${product.id ? `/${product.id}` : ''}`, {
    method: product.id ? 'PUT' : 'POST',
    body: JSON.stringify(product),
  });
}

export function deleteDoorProduct(type, id) {
  return request(`/admin/door-systems/${type}/products/${id}`, {
    method: 'DELETE',
  });
}

export function saveNewsArticle(article) {
  return request(`/admin/news${article.id ? `/${article.id}` : ''}`, {
    method: article.id ? 'PUT' : 'POST',
    body: JSON.stringify(article),
  });
}

export function deleteNewsArticle(id) {
  return request(`/admin/news/${id}`, {
    method: 'DELETE',
  });
}
