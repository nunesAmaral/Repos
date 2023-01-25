type Props = {};

export default function SearchBar({}: Props) {
  return (
    <div className={'mt-12 flex'}>
      <input type="text" placeholder="Digite o título do trabalho ou autor..." className={'block bg-night-200 text-night-100 rounded w-full placeholder:text-[14px]'}/>
      <button className={'bg-blueberry-300 rounded p-4'}>Pesquisar</button>
    </div>
  );
}
