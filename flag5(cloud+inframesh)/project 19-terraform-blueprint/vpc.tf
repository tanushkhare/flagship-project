# 1. The VPC
resource "aws_vpc" "flagship_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "Flagship-VPC"
  }
}

# 2. The Public Subnet
resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.flagship_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true # Crucial: ensures instances get public IPs
  tags = {
    Name = "Public-Subnet"
  }
}

# 3. Internet Gateway (The "Door" to the internet)
resource "aws_internet_gateway" "main_igw" {
  vpc_id = aws_vpc.flagship_vpc.id
  tags = {
    Name = "Flagship-IGW"
  }
}

# 4. Route Table (The "Map" for traffic)
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.flagship_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main_igw.id
  }

  tags = {
    Name = "Public-Route-Table"
  }
}

# 5. Route Table Association (Connects the Route Table to your Subnet)
resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_rt.id
}