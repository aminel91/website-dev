// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
{
  title: 'Java 8/11/14',
  competency: 5,
  category: ['Languages', 'Java'],
},
{
  title: 'Spring Boot/MVC',
  competency: 3,
  category: ['Java'],
},
  {
    title: 'JEE 8',
    competency: 3,
    category: ['Java'],
  },
{
    title: 'JUnit 4 - 5',
    competency: 4,
    category: ['Java'],
},
{
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
},
  {
    title: 'Kotlin',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Rust',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Golang',
    competency: 2,
    category: ['Languages'],
  },
{
    title: 'Hamcrest Matchers',
    competency: 4,
    category: ['Java'],
},
  {
    title: 'Hibernate',
    competency: 4,
    category: ['Java'],
  },
{
    title: 'Guava',
    competency: 4,
    category: ['Java'],
},
  {
    title: 'micronaut',
    competency: 2,
    category: ['Java'],
  },
  {
    title: 'Vaadin',
    competency: 2,
    category: ['Java'],
  },
  {
    title: 'Android',
    competency: 2,
    category: ['Java'],
  },
{
  title: 'Node.JS',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Bash',
  competency: 3,
  category: ['Tools', 'Languages'],
},
{
  title: 'MongoDB',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'ElasticSearch',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'MySQL/HQL',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Redis',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Neo4J',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Data Mining',
  competency: 2,
  category: ['Data Science'],
},
{
  title: 'Express.JS',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Git',
  competency: 4,
  category: ['Tools'],
},
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
{
  title: 'Kubernetes',
  competency: 2,
  category: ['Tools', 'Data Engineering'],
},
{
  title: 'Numpy',
  competency: 3,
  category: ['Data Science', 'Data Engineering', 'Python'],
},
{
  title: 'Tensorflow + Keras',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'Typescript',
  competency: 2,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'HTML + SASS/CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 3,
  category: ['Languages', 'Python'],
},
{
  title: 'C/C++',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Julia',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Data Visualization',
  competency: 3,
  category: ['Data Science', 'Javascript', 'Java'],
},
  {
    title: 'Tableau',
    competency: 2,
    category: ['Data Science', 'Data Engineering'],
  },
{
  title: 'GraphQL',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Pandas',
  competency: 3,
  category: ['Data Engineering', 'Data Science', 'Python'],
},
{
  title: 'Matplotlib',
  competency: 3,
  category: ['Data Engineering', 'Data Science', 'Python'],
},
{
  title: 'Scikit-Learn',
  competency: 4,
  category: ['Data Engineering', 'Data Science', 'Python'],
},
{
  title: 'Hadoop',
  competency: 2,
  category: ['Data Engineering', 'Data Science'],
},
{
  title: 'Spark',
  competency: 2,
  category: ['Data Engineering', 'Data Science'],
}
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
