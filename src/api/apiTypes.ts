export interface MetaDataPageApi {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description interface que define um formato de uma pagina de dados da API
 * @template Data tipo do dado da página
 */

export interface PageAPI<Data> {
  meta: MetaDataPageApi;
  data: Data[];
}
