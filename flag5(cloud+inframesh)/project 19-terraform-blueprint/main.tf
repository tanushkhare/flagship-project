resource "aws_instance" "rag_engine_server" {
  ami           = "ami-0c101f26f147fa7fd"
  instance_type = "t3.small"

  # Increase storage to 30GB to accommodate ML libraries
  root_block_device {
    volume_size = 30
    volume_type = "gp3"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install python3 -y
              yum install python3-pip -y
              pip3 install --upgrade pip
              EOF

  tags = {
    Name = "RAG-Engine-Server"
  }
}