import React from 'react';
import { useRouter } from 'next/router';

import MainLayout from 'layouts/MainLayout';
import Section from '@/components/Section/Section';
import ItemCard from '@/components/UI/Card/ItemCard';
import Icon from '@/components/Icon/Icon';
import Button from '@/components/UI/Button/Button';
import db from '../../utils/db.json';

interface CategoryTypes {
  id: number;
  name: string;
  slug: string;
  posts: number;
  description?: string;
  subcount: number;
  icon: string;
  subcategories: CategoryTypes[];
}

interface CategoriesTypes {
  categories: CategoryTypes[];
}

const Articles: React.FC<CategoriesTypes> = ({ categories }) => {
  const router = useRouter();
  return (
    <MainLayout layout_prefix="blog">
      {categories.map((category, index) => (
        <Section
          key={category.id}
          section_prefix="category"
          section_extra_classes={['fade-in-top']}
          section_heading_label={category.name}
          section_heading_icon={category.icon}
          // style={{animationDelay:}}
          seection_style={{ animationDelay: `${50 * index}ms` }}
        >
          {/* <Heading
            headingLevel="h1"
            heading_label={category.name}
            heading_prefix="category"
            heading_icon={category.icon ? category.icon : undefined}
          /> */}
          <div
            className="category__description"
            dangerouslySetInnerHTML={{ __html: category.description! }}
          ></div>
          {category.subcategories.length &&
            category.subcategories.map((subcategory, index) => (
              <ItemCard
                key={index}
                itemCard_prefix="category"
                itemCard_modifier={subcategory.slug}
                onClick={() => router.push(`/blog/${subcategory.slug}`)}
              >
                {subcategory.icon && (
                  <Icon icon_prefix="item-card" icon={subcategory.icon} />
                )}
                <h3>{subcategory.name}</h3>
                <Button button_type="button" button_prefix="item-card">
                  <span className="item-card__button__text">paczaj</span>
                  <Icon
                    icon="icon-circle-right"
                    icon_prefix="item-card__button"
                  />
                </Button>
              </ItemCard>
            ))}
        </Section>
      ))}
    </MainLayout>
  );
};

export async function getStaticProps({ props }: any) {
  // const res = await fetch(process.env.API + 'category/');
  // const categories = await res.json();
  const categories = db.category;

  // TODO dodac obsługe błędów
  return {
    props: {
      categories,
    },
  };
}

export default Articles;
