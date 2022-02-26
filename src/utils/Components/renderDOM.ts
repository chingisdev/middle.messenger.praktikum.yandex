import { Block } from './Block';

export function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error('Root not found');
  }

  // TODO: check usage
  component.dispatchComponentDidMount();

  root.innerHTML = '';

  root.append(component.getContent());
}
