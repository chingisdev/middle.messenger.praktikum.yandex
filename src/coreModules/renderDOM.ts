import Block from './Block';

export function renderDOM(rootSelector: string, component: Block<any>) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error('Root not found');
  }

  component.dispatchComponentDidMount();

  root.append(component.getContent());
}