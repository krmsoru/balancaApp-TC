namespace BalancaDaVidaAPI.Models
{
    public class Food
    {
        public Int32 Id { get; set; }
        public string nome { get;set; }
        public string descricao { get;set; }
        public Nutrientes nutrientes { get; set; }
    }

    public class Nutrientes
    {
        public Double? calorias { get; set; }
        public Double? sodio { get; set; }
        public Double? gorduras { get; set; }
        public Double? proteinas { get; set; }
    }
}
