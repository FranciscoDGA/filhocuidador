-- Tabela de especialistas cadstrados via formulário
CREATE TABLE IF NOT EXISTS specialists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  specialty TEXT NOT NULL,
  registration TEXT NOT NULL,
  whatsapp TEXT,
  city TEXT,
  linkedin TEXT,
  atendimento TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending', -- pending, approved, rejected
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_specialists_email ON specialists(email);
CREATE INDEX IF NOT EXISTS idx_specialists_status ON specialists(status);
CREATE INDEX IF NOT EXISTS idx_specialists_specialty ON specialists(specialty);

-- RLS (Row Level Security)
ALTER TABLE specialists ENABLE ROW LEVEL SECURITY;

-- Política para inserção (qualquer um pode cadastrar)
CREATE POLICY "Anyone can insert specialists" ON specialists
  FOR INSERT WITH CHECK (true);

-- Política para leitura (apenas o dono pode ver)
CREATE POLICY "Only owner can read specialists" ON specialists
  FOR SELECT USING (true); -- Altere para autenticação em produção

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_specialists_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at
CREATE TRIGGER update_specialists_updated_at
  BEFORE UPDATE ON specialists
  FOR EACH ROW
  EXECUTE FUNCTION update_specialists_updated_at();
