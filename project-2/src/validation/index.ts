export const productValidation = (product: {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}) => {
  // Return an object
  const errors: {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  };

  const imageUrlPattern =
    /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|svg))$/i;

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product description must be between 10 and 900 characters!";
  }

  if (!product.imageUrl.trim() || !imageUrlPattern.test(product.imageUrl)) {
    errors.imageUrl = "Valid image URL is required";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid price is required";
  }

  return errors;
};
