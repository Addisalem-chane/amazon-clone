
import {categoryInfos} from './CategoryFullInfos';
import CategoryCard from '../category/CategoryCard';
import classes from './Category.module.css'

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </section>
  );
}

export default Category;