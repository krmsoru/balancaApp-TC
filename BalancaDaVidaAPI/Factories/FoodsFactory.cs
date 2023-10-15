using BalancaDaVidaAPI.Models;

namespace BalancaDaVidaAPI.Factories
{
    public static class FoodsFactory
    {
        public static List<Food> CreateFoodList()
        {
            List<Food> foodList = new List<Food>();

            for (int i = 1; i <= 100; i++)
            {
                Food food = new Food
                {
                    Id = i,
                    nome = $"Alimento {i}",
                    descricao = $"Descrição do alimento {i}",
                    nutrientes = new Nutrientes
                    {
                        calorias = GetRandomDouble(50, 500),
                        sodio = GetRandomDouble(0, 1000),
                        gorduras = GetRandomDouble(0, 50),
                        proteinas = GetRandomDouble(1, 30)
                    }
                };

                foodList.Add(food);
            }

            return foodList;
        }

        public static List<Food> CreateFoodList(double numberOfFoods)
        {
            List<Food> foodList = new List<Food>();

            for (int i = 1; i <= numberOfFoods; i++)
            {
                Food food = new Food
                {
                    Id = i,
                    nome = $"Alimento {i}",
                    descricao = $"Descrição do alimento {i}",
                    nutrientes = new Nutrientes
                    {
                        calorias = GetRandomDouble(50, 500),
                        sodio = GetRandomDouble(0, 1000),
                        gorduras = GetRandomDouble(0, 50),
                        proteinas = GetRandomDouble(1, 30)
                    }
                };

                foodList.Add(food);
            }

            return foodList;
        }

        private static double? GetRandomDouble(double minValue, double maxValue)
        {
            Random random = new Random();
            var randomValue = random.NextDouble() * (maxValue - minValue) + minValue;
            return Math.Round(randomValue, 2); // Arredonda o valor para duas casas decimais

        }
    }
}
