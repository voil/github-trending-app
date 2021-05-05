IP = "192.168.10.10"
GUI = false
PORT_GUEST = 8000
PORT_HOST  = 8000

unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies installed, please try the command agai n."
  exit
end

Vagrant.configure("2") do |config|
  # Name of the virtual firing machine
  config.vm.box = "ole/stretch64"
  # Network setting
  config.vm.network "private_network", ip: IP
  # Network redirection
  config.vm.network "forwarded_port", guest: PORT_GUEST, host: PORT_HOST
  # Setting the provider
  config.vm.provider "virtualbox" do |v|
    v.gui = GUI
  end

  config.vm.provision :docker
  config.vm.provision "shell", path: "run-api.sh", privileged: true, run: "always"
end
